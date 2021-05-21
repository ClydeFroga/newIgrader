let menu = document.querySelector('.wrapper')
let asideMenu = document.querySelector('.asideMenu')
let container = document.querySelector('.wrapper__content > .container')
let containerWidth = container.clientWidth
let containerWidthAfter = null
let asideMenuWidth = asideMenu.clientWidth

function menuToggle() {
  width = document.documentElement.clientWidth;
  if(width > 1023) {
    asideMenuWidth = asideMenu.clientWidth
    if(menu.classList.contains('leftDestroy')) {
      //Разворот
      
      // containerWidth = container.clientWidth - 270
      menu.classList.toggle('leftDestroy')
  
      if(menu.classList.contains('first')) {
        menu.classList.remove('first')
        asideMenu.style.gridArea = 'unset'
        asideMenu.style.display = 'block'
        asideMenuWidth = asideMenu.clientWidth
        gsap.from(container, {x: -asideMenuWidth / 2, duration: 0.2})
        setTimeout(() => asideMenu.style.gridArea = '', 300)
      }
      else {
        //если разрешение ниже полной вместимости
        if(containerWidth < 1310 || containerWidthAfter > containerWidth) {
          gsap.to(".wrapper__block", {marginLeft: 0, duration: 0.3})
        } else {
          gsap.to(container, {x: asideMenuWidth / 2, duration: 0.3})
          // }
        }
      }
    
      gsap.to(asideMenu, {display: 'block', right: 0, duration: 0.3,  ease: "power1.out"})
      

      localStorage.removeItem('menuCollapsed')
    }
    else {
      //Сворот
      gsap.to(asideMenu, {right: '100%', duration: 0.2})
      
      //если разрешение ниже полной вместимости
      if(containerWidth < 1310) {
        gsap.to(".wrapper__block", {marginLeft: -asideMenuWidth, duration: 0.3})
      } else {
        console.log(container)
        gsap.to(container, {x: -asideMenuWidth / 2, duration: 0.3})
      }
      
      setTimeout(() => {
        containerWidthAfter = container.clientWidth
        menu.classList.toggle('leftDestroy')
      }, 400)
      
      localStorage.setItem('menuCollapsed', 'true')
    }
  }
  else {
    gsap.to(asideMenu, {display: 'block', left: 0, duration: 0.3})
    
    setTimeout(() => asideMenu.classList.toggle('open'), 400)
  }
}

let width = document.documentElement.clientWidth;

if (localStorage.getItem("menuCollapsed") === "true") {
  if(width > 1023) {
    menu.classList.add("leftDestroy", "first");
  }
}

let toggler = document.querySelector('.header__menuButton')

document.querySelector('.asideMenu__close').addEventListener('click', () => {
  gsap.to(asideMenu, {display: 'none', left: -270, duration: 0.3})
  setTimeout(() => asideMenu.classList.toggle('open'), 400)
})
toggler.addEventListener('click', menuToggle)