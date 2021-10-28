let sliders = [];

function slider() {
  sliders[0] = new Swiper("#sliderTop", {
    spaceBetween: 25,
    grid: {
      rows: 1,
      fill: "row",
    },

    slidesPerView: 1.3,
    allowTouchMove: true,

    breakpoints: {
      576: {
        slidesPerView: 2.2,
      },
      768: {
        grid: {
          rows: 2,
        },
        slidesPerView: 2,
      },
      1024: {
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
    scrollbar: {
      el: "#sliderTop__scrollBar",
      draggable: false,
      hide: false,
    },
    pagination: {
      el: "#sliderTop__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderTop__toLeft",
      nextEl: "#sliderTop__toRight",
    },
  });
  sliders[1] = new Swiper("#sliderSingleTop", {
    spaceBetween: 18,
    grid: {
      rows: 1,
      fill: "row",
    },
    slidesPerView: 1.3,
    allowTouchMove: true,
    breakpoints: {
      768: {
        grid: {
          rows: 2,
        },
        slidesPerView: 3,
      },
      1024: {
        grid: {
          rows: 3,
        },
        slidesPerView: 2,
      },
    },
    scrollbar: {
      el: "#sliderSingleTop__scrollBar",
      draggable: false,
      hide: false,
    },
  });
  sliders[2] = new Swiper("#sliderSec1", {
    spaceBetween: 20,
    grid: {
      rows: 1,
      fill: "column",
    },
    slidesPerView: 1.3,
    allowTouchMove: true,

    breakpoints: {
      768: {
        grid: {
          rows: 1,
          fill: "row",
        },
        slidesPerView: 3,
      },
      1024: {
        allowTouchMove: false,
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
      },
      1280: {
        allowTouchMove: true,
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
      },
    },
    pagination: {
      el: "#sliderSec1__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderSec1__toLeft",
      nextEl: "#sliderSec1__toRight",
    },
    scrollbar: {
      el: "#sliderSec1__scrollBar",
      draggable: false,
      hide: false,
    },
  });
  sliders[3] = new Swiper("#sliderSec2", {
    spaceBetween: 0,
    slidesPerView: 1,
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
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderSec2__toLeft",
      nextEl: "#sliderSec2__toRight",
    },
  });
  sliders[4] = new Swiper("#sliderSec3", {
    spaceBetween: 0,
    slidesPerView: 1,
    allowTouchMove: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: "#sliderSec3__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderSec3__toLeft",
      nextEl: "#sliderSec3__toRight",
    },
  });
  sliders[5] = new Swiper("#sliderBot", {
    spaceBetween: 30,
    grid: {
      fill: "row",
    },
    slidesPerView: 1.3,

    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      1024: {
        grid: {
          rows: 1,
        },
        slidesPerView: 4,
      },
    },
    pagination: {
      el: "#sliderBot__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderBot__toLeft",
      nextEl: "#sliderBot__toRight",
    },
    scrollbar: {
      el: "#sliderBot__scrollBar",
      draggable: false,
      hide: false,
    },
  });
  sliders[6] = new Swiper("#sliderLarge", {
    spaceBetween: 0,
    grid: {
      fill: "row",
    },
    allowTouchMove: false,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: ".sliderLarge__left",
      nextEl: ".sliderLarge__right",
    },
  });
  sliders[7] = new Swiper("#sliderDouble", {
    spaceBetween: 30,
    grid: {
      rows: 2,
      fill: "row",
    },
    allowTouchMove: true,

    slidesPerView: 3,

    pagination: {
      el: "#sliderDouble__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#sliderDouble__toLeft",
      nextEl: "#sliderDouble__toRight",
    },
  });
  sliders[8] = new Swiper("#modelThumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  sliders[9] = new Swiper("#modelMain", {
    spaceBetween: 10,
    navigation: {
      nextEl: "#modelMain-button-next",
      prevEl: "#modelMain-button-prev",
    },
    thumbs: {
      swiper: sliders[8],
    },
  });
  sliders[10] = new Swiper("#catalogPageTop", {
    spaceBetween: 15,
    slidesPerView: 1.3,

    breakpoints: {
      768: {
        slidesPerView: 1.7,
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: "#catalogPageTop__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#catalogPageTop__toLeft",
      nextEl: "#catalogPageTop__toRight",
    },
  });
  sliders[11] = new Swiper("#blockSlider", {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: "#blockSlider__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#blockSlider__toLeft",
      nextEl: "#blockSlider__toRight",
    },
  });
  sliders[12] = new Swiper("#blockSlider2", {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: "#blockSlider2__pagination",
      clickable: true,
    },
    navigation: {
      prevEl: "#blockSlider2__toLeft",
      nextEl: "#blockSlider2__toRight",
    },
  });
}

document.addEventListener("DOMContentLoaded", slider);