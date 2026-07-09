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
        sidebar.classList.add('page__sidebar--active');
        topbar.classList.add('header--hidden');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('page__sidebar--active');
        topbar.classList.remove('header--hidden');
    });
}

let brandsSwiperInstance;

function initBrandsSwiper() {
    if (window.innerWidth < 768) {
        if (!brandsSwiperInstance) {
            brandsSwiperInstance = new Swiper('.brands__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.brands .swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else if (brandsSwiperInstance) {
        brandsSwiperInstance.destroy(true, true);
        brandsSwiperInstance = null;
    }
}

initBrandsSwiper();
window.addEventListener('resize', initBrandsSwiper);

let serviceSwiperInstance;

function initServiceSwiper() {
    if (window.innerWidth < 768) {
        if (!serviceSwiperInstance) {
            serviceSwiperInstance = new Swiper('.service-card__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.service-card .swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else if (serviceSwiperInstance) {
        serviceSwiperInstance.destroy(true, true);
        serviceSwiperInstance = null;
    }
}

initServiceSwiper();
window.addEventListener('resize', initServiceSwiper);

let pricesSwiperInstance;

function initPricesSwiper() {
    if (window.innerWidth < 768) {
        if (!pricesSwiperInstance) {
            pricesSwiperInstance = new Swiper('.prices__mobile', {
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.prices__mobile .swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else if (pricesSwiperInstance) {
        pricesSwiperInstance.destroy(true, true);
        pricesSwiperInstance = null;
    }
}

initPricesSwiper();
window.addEventListener('resize', initPricesSwiper);

const readMoreBtn = document.querySelector('.services__read-more');
const description = document.querySelector('.services__description');

if (readMoreBtn && description) {
    const btnText = readMoreBtn.querySelector('.services__btn-text');

    if (btnText) {
        readMoreBtn.addEventListener('click', () => {
            const expanded = description.classList.toggle(
                'services__description--expanded'
            );

            btnText.textContent = expanded
                ? 'Скрыть'
                : 'Читать далее';
        });
    }
}

const brands = document.querySelector('.brands');
const brandsBtn = document.querySelector('.brands__button');
const brandsBtnText = document.querySelector('.brands__button-text');

if (brands && brandsBtn && brandsBtnText) {
    brandsBtn.addEventListener('click', () => {
        const expanded = brands.classList.toggle('brands--expanded');

        brandsBtnText.textContent = expanded
            ? 'Скрыть'
            : 'Показать все';
    });
}


const serviceCard = document.querySelector('.service-card');
const serviceBtn = document.querySelector('.service-card__more');

if (serviceCard && serviceBtn) {
    serviceBtn.addEventListener('click', () => {
        const expanded = serviceCard.classList.toggle('service-card--expanded');

        serviceBtn.innerHTML = expanded
            ? '<img src="./img/expand.png" alt=""> Скрыть'
            : '<img src="./img/expand.png" alt=""> Показать все';
    });
}