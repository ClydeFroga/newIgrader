function slider() {
    let sliderTop = new Swiper('#sliderTop', {
        spaceBetween: 25,
        slidesPerColumnFill: 'row',
        slidesPerView: 1.3,
        allowTouchMove: true,
        slidesPerColumn: 1,
        
        breakpoints: {
            576: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            1024: {
                slidesPerColumn: 1,
                slidesPerView: 3,
            },
        },
        scrollbar: {
            el: '#sliderTop__scrollBar',
            draggable: false,
            hide: false,
        },
        pagination: {
            el: "#sliderTop__pagination",
            clickable: true
        },
        navigation: {
            prevEl: '#sliderTop__toLeft',
            nextEl: '#sliderTop__toRight',
        },
    });
    let sliderSingleTop = new Swiper('#sliderSingleTop', {
        spaceBetween: 18,
        slidesPerColumnFill: 'row',
        slidesPerView: 1.3,
        allowTouchMove: true,
        slidesPerColumn: 1,
        
        breakpoints: {

            768: {
                slidesPerColumn: 2,
                slidesPerView: 3,
            },
            1024: {
                slidesPerColumn: 3,
                slidesPerView: 2,
            },
        },
        scrollbar: {
            el: '#sliderSingleTop__scrollBar',
            draggable: false,
            hide: false,
        },
    });
    let sliderSec1 = new Swiper('#sliderSec1', {
        spaceBetween: 20,
        slidesPerColumnFill: 'column',
        slidesPerView: 1,
        slidesPerColumn: 4,
        allowTouchMove: false,
        
        breakpoints: {
            768: {
                allowTouchMove: true,
                slidesPerColumnFill: 'row',
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            1024: {
                allowTouchMove: true,
                slidesPerColumn: 1,
                slidesPerView: 2,
            },
            1280: {
                allowTouchMove: true,
                slidesPerColumn: 1,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: "#sliderSec1__pagination",
            clickable: true
        },
        navigation: {
            prevEl: '#sliderSec1__toLeft',
            nextEl: '#sliderSec1__toRight',
        },
    });
    let sliderSec2 = new Swiper('#sliderSec2', {
        spaceBetween: 0,
        slidesPerView: 1,
        // slidesPerColumn: 4,
        allowTouchMove: true,
        
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3.2,
            },
            1280: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: "#sliderSec2__pagination",
            clickable: true
        },
        navigation: {
            prevEl: '#sliderSec2__toLeft',
            nextEl: '#sliderSec2__toRight',
        },
    });
    let sliderBot = new Swiper('#sliderBot', {
        spaceBetween: 30,
        slidesPerColumnFill: 'row',
        slidesPerView: 1.3,
        
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerColumn: 1,
                slidesPerView: 4,
            },
        },
        scrollbar: {
            el: '#sliderBot__scrollBar',
            draggable: false,
            hide: false,
        },
    });
    let sliderLarge = new Swiper('#sliderLarge', {
        spaceBetween: 0,
        slidesPerColumnFill: 'row',
        allowTouchMove: false,
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            prevEl: '.sliderLarge__left',
            nextEl: '.sliderLarge__right',
        },
    });
    let sliderDouble = new Swiper('#sliderDouble', {
        spaceBetween: 30,
        slidesPerColumnFill: 'row',
        allowTouchMove: true,
        slidesPerColumn: 2,
        slidesPerView: 3,


        pagination: {
            el: "#sliderDouble__pagination",
            clickable: true
        },
        navigation: {
            prevEl: '#sliderDouble__toLeft',
            nextEl: '#sliderDouble__toRight',
        },
    });
}
document.addEventListener('DOMContentLoaded', slider)