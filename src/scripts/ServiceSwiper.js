import Swiper from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"

const serviceSwiper = new Swiper(".servicesSwiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nextService",
    prevEl: ".prevService",
  },
  pagination: {
    el: ".swiperService-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
  },
})
