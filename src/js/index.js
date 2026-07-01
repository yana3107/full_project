import '../scss/style.scss';

import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

console.log('It works!');

const burger = document.getElementById('burger');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.querySelector('.page__sidebar');
const topbar = document.querySelector('.header');

if (burger && closeBtn && sidebar && topbar) {
    burger.addEventListener('click', () => {
        sidebar.classList.add('active');
        topbar.classList.add('hidden');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        topbar.classList.remove('hidden');
    });
}

let brandsSwiperInstance;
function initBrandsSwiper() {
    if (window.innerWidth < 768 && !brandsSwiperInstance) {
        brandsSwiperInstance = new Swiper('.brands__swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.brands .swiper-pagination',
                clickable: true,
            },
        });
    }
}
initBrandsSwiper();
window.addEventListener('resize', initBrandsSwiper);


let serviceSwiperInstance;
function initServiceSwiper() {
    if (window.innerWidth < 768 && !serviceSwiperInstance) {
        serviceSwiperInstance = new Swiper('.service-card__swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.service-card .swiper-pagination',
                clickable: true,
            },
        });
    }
}
initServiceSwiper();
window.addEventListener('resize', initServiceSwiper);

const btn = document.querySelector('.services__read-more');
const block = document.querySelector('.services__description');

if (btn && block) {
    const text = btn.querySelector('.services__btn-text');

    btn.addEventListener('click', () => {
        block.classList.toggle('open');

        if (text) {
            text.textContent = block.classList.contains('open')
                ? 'Скрыть'
                : 'Читать дальше';
        }
    });
}