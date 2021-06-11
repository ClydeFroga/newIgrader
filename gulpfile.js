let preprocessor = 'sass', // Preprocessor (sass, less, styl); 'sass' also work with the Scss syntax in blocks/ folder.
		fileswatch   = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

const { src, dest, parallel, series, watch } = require('gulp')
const svgSprite 	 = require('gulp-svg-sprite');
const browserSync  = require('browser-sync').create()
const bssi         = require('browsersync-ssi')
const ssi          = require('ssi')
const webpack      = require('webpack-stream')
const sass         = require('gulp-sass')
const sassglob     = require('gulp-sass-glob')
const less         = require('gulp-less')
const lessglob     = require('gulp-less-glob')
const styl         = require('gulp-stylus')
const stylglob     = require("gulp-noop")
const cleancss     = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')
const imagemin     = require('gulp-imagemin')
const newer        = require('gulp-newer')
const rsync        = require('gulp-rsync')
const del          = require('del')

function svg() {
	return src('**/*.svg', { cwd: 'app/css/svg/assets' })
		.pipe(svgSprite({
				mode: {
					symbol: true // Activate the «symbol» mode
				}
			}
		))
		.pipe(dest('app/css/svg/out'))
		.pipe(dest("C:\\xampp\\htdocs\\igrader\\wp-content\\themes\\igraderNew\\svg\\out"))
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/',
			middleware: bssi({ baseDir: 'app/', ext: '.html' })
		},
		ghostMode: { clicks: false },
		notify: false,
		online: true,
		// tunnel: 'yousutename', // Attempt to use the URL https://yousutename.loca.lt
	})
}

function scripts() {
	return src('app/js/app.js')
		.pipe(webpack({
			mode: 'production',
			performance: { hints: false },
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/env'],
							plugins: ['babel-plugin-root-import']
						}
					}
				]
			}
		})).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(rename('app.min.js'))
		.pipe(dest('app/js'))
		.pipe(dest("C:\\xampp\\htdocs\\igrader\\wp-content\\themes\\igraderNew\\js"))
		.pipe(browserSync.stream())
}

function stylesMain() {
	return src([`app/styles/${preprocessor}/main.sass`, `!app/styles/${preprocessor}/_*.*`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)())
		// .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
		.pipe(autoprefixer())
		.pipe(cleancss({ level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
		.pipe(rename('style.css'))
		.pipe(dest('app/css'))
		.pipe(dest("C:\\xampp\\htdocs\\igrader\\wp-content\\themes\\igraderNew"))
		.pipe(browserSync.stream())
}

function stylesSec() {
	return src([`app/styles/${preprocessor}/secondary.sass`, `!app/styles/${preprocessor}/_*.*`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)())
		// .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
		.pipe(autoprefixer())
		.pipe(cleancss({ level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
		.pipe(rename('styleSec.css'))
		.pipe(dest('app/css'))
		.pipe(dest("C:\\xampp\\htdocs\\igrader\\wp-content\\themes\\igraderNew"))
		.pipe(browserSync.stream())
}

function images() {
	return src(['app/images/src/**/*'])
		.pipe(newer('app/images/dist'))
		.pipe(imagemin())
		.pipe(dest('app/css/img/'))
		.pipe(browserSync.stream())
}

function buildcopy() {
	return src([
		'{app/js,app/css}/*.min.*',
		'app/images/**/*.*',
		'!app/images/src/**/*',
		'app/fonts/**/*'
	], { base: 'app/' })
	.pipe(dest('dist'))
}

async function buildhtml() {
	let includes = new ssi('app/', 'dist/', '/**/*.html')
	includes.compile()
	del('dist/parts', { force: true })
}

function cleandist() {
	return del('dist/**/*', { force: true })
}

function deploy() {
	return src('dist/')
		.pipe(rsync({
			root: 'dist/',
			hostname: 'username@yousite.com',
			destination: 'yousite/public_html/',
			// clean: true, // Mirror copy with file deletion
			include: [/* '*.htaccess' */], // Included files to deploy,
			exclude: [ '**/Thumbs.db', '**/*.DS_Store' ],
			recursive: true,
			archive: true,
			silent: false,
			compress: true
		}))
}

function startwatch() {
	watch('app/css/svg/assets/*', { usePolling: true }, svg)
	watch(`app/styles/${preprocessor}/blocks/main/**/*`, { usePolling: true }, stylesMain)
	watch(`app/styles/${preprocessor}/blocks/secondary/**/*`, { usePolling: true }, stylesSec)
	watch(['app/js/**/*.js', '!app/js/**/*.min.js'], { usePolling: true }, scripts)
	watch('app/images/src/**/*.{jpg,jpeg,png,webp,svg,gif}', { usePolling: true }, images)
	watch(`app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

exports.scripts = scripts
exports.stylesMain  = stylesMain
exports.stylesSec  = stylesSec
exports.images  = images
exports.deploy  = deploy
exports.assets  = series(scripts, stylesMain, images)
exports.build   = series(cleandist, scripts, stylesMain, images, buildcopy, buildhtml)
exports.default = series(svg, scripts, stylesMain, stylesSec, images, parallel(browsersync, startwatch))
