import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 114,
  loop: true,
  centeredSlides: true,
});