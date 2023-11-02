import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const hotOffersSwiper = new Swiper('.articlesSwiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.nextOffer',
    prevEl: '.prevOffer',
  },
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
})