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

