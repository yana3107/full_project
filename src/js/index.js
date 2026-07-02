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

const readMoreBtn = document.querySelector('.services__read-more');
const description = document.querySelector('.services__description');
const hiddenText = document.querySelector('.services__hidden-text');

if (readMoreBtn && description && hiddenText) {
    const btnText = readMoreBtn.querySelector('.services__btn-text');
    hiddenText.style.display = 'none';

    readMoreBtn.addEventListener('click', () => {
        const expanded = description.classList.toggle('open');

        hiddenText.style.display = expanded ? 'block' : 'none';
        btnText.textContent = expanded ? 'Скрыть' : 'Читать далее';
    });
}

const brandsBtn = document.querySelector('.more');
const brandSlides = document.querySelectorAll('.brands .swiper-slide');

if (brandsBtn) {
    brandsBtn.addEventListener('click', () => {
        const expanded = brandsBtn.classList.toggle('expanded');

        brandSlides.forEach((slide, index) => {
            if (index >= 8) {
                slide.style.display = expanded ? 'block' : 'none';
            }
        });

        brandsBtn.innerHTML = expanded
            ? '<img src="./img/expand.png" alt=""> Скрыть'
            : '<img src="./img/expand.png" alt=""> Показать все';
    });
}

const serviceBtn = document.querySelector('.service-card__more');
const serviceSlides = document.querySelectorAll('.service-card .swiper-slide');

if (serviceBtn) {
    serviceBtn.addEventListener('click', () => {
        const expanded = serviceBtn.classList.toggle('expanded');

        serviceSlides.forEach((slide, index) => {
            if (index >= 4) {
                slide.style.display = expanded ? 'block' : 'none';
            }
        });

        serviceBtn.innerHTML = expanded
            ? '<img src="./img/expand.png" alt=""> Скрыть'
            : '<img src="./img/expand.png" alt=""> Показать все';
    });
}