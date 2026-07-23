import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: "true",
  slidesPerView: "auto",
  navigation: {
    nextEl: ".button-skills",
  },
});
