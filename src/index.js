import './index.html';
import './cart.html';
import './card.html';
import './index.scss';

import Swiper, {Thumbs, Scrollbar, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import {pagination} from './modules/pagination';


const paginationWrapper = document.querySelector('.pagination');
const pageURL = new URL(location);
const page = +pageURL.searchParams.get('page') || 1;

pagination(paginationWrapper, 20, page, 8);

const thumbSwiper = new Swiper('.card__slider-thumb', {
    spaceBetween: 44,
    slidesPerView: 3,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false
    },
    modules: [Scrollbar]
});

new Swiper('.card__image', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: thumbSwiper,
        slideThumbActiveClass: '.card__thumb-btn_active'
    },
    modules: [Thumbs]
});
new Swiper('.recommended__carousel', {
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation]
});