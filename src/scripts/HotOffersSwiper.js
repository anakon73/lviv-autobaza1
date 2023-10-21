import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const hotOffersSwiper = new Swiper('.hotOffersSwiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.nextOffer',
    prevEl: '.prevOffer',
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
})