import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const reviewsSwiper = new Swiper('.reviewsSwiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.nextReview',
    prevEl: '.prevReview',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 20,
})