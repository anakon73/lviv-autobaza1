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
  spaceBetween: 26,
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 2,
    },
  },
})
