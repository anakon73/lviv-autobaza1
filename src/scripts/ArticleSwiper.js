import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const articlesSwiper = new Swiper(".articlesSwiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".nextArticle",
    prevEl: ".prevArticle",
  },
  pagination: {
    clickable: true,
    el: ".swiperArticle-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 22,
  loop: true,
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
})
