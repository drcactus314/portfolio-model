import Swiper from "swiper";
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

const swiper = new Swiper(".swiper-skills", {
  modules: [Navigation, Keyboard, A11y],
  loop: true,
  slidesPerView: "auto",
  keyboard:{
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    enabled: true,
  },
  navigation: {
    nextEl: '.button-skills',
  },
});

const swiperSingle = new Swiper(".swiper-single", {
  modules: [Navigation, Keyboard, A11y],
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  keyboard:{
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    enabled: true,
  },
  lockClass: ".swiper-button-disabled",
  navigation: {
    nextEl: '.control-button.next',
    prevEl: '.control-button.prev',
  },
});

const swiperReview = new Swiper(".swiper-review", {
  modules: [Navigation, Keyboard, A11y],
  loop: false,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 16,
  keyboard:{
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    enabled: true,
  },
  lockClass: ".swiper-button-disabled",
  navigation: {
    nextEl: '.review-button.next',
    prevEl: '.review-button.prev',
  },
  breakpoints:{
    1200: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 1
    }
  }
});


