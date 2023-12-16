import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const hotOffersSwiper = new Swiper(".hotOffersSwiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nextOffer",
    prevEl: ".prevOffer",
  },
  pagination: {
    el: ".swiperOffer-pagination",
    clickable: true,
  },
  slideActiveClass: "activeOffer",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
  },
})
