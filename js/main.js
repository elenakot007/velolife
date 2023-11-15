'use strict';

const mobileMenu = document.querySelector('.menu-list__mobile'),
    buttonMenuClose = document.querySelector('.menu-list__close-btn'),
    buttonMenu = document.querySelector('.menu-btn');

buttonMenu.addEventListener('click', (e) => {
    document.querySelector('.menu-list').classList.add('menu-list__mobile');
});

document.querySelector('.menu-list__close-btn').addEventListener('click', (e) => {
    document.querySelector('.menu-list').classList.remove('menu-list__mobile');
});

$(document).ready(function () {
    $('.sliders__inner').slick({
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow-prev arrow"></button>',
        nextArrow: '<button class="arrow-next arrow"></button>'
    });
});

/*const slides = document.querySelectorAll('.slider__item'),
      indicators = document.querySelector('.carousel-indicators'),
      prevArrow = document.querySelector('.arrow-prev'),
      nextArrow = document.querySelector('.arrow-next'),
      slidesWrapper = document.querySelector('.slider__wrapper'),
      slidesInner = document.querySelector('.sliders__inner'),
      width = window.getComputedStyle(slidesWrapper).width,
      dots = [];

      let slideIndex = 1;
      let offset = 0;

function showSlides() {
    dots.forEach(dot => dot.classList.remove('dot--active'));
    dots[slideIndex - 1].classList.add('dot--active');
}

for (let i = 0; i < slides.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {dot.classList.add('dot--active')};
    indicators.append(dot);
    dots.push(dot);
}

function activeDots(index){
    dots.forEach(dot => dot.classList.remove('dot--active'));
    dots[index - 1].classList.add('dot--active');
}

    prevArrow.addEventListener('click',() => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        slidesInner.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        showSlides();
        activeDots(slideIndex);
    });
    
    nextArrow.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        showSlides();
        activeDots(slideIndex);
    });

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = +width.replace(/\D/g, '') * (slideTo - 1);
        slidesInner.style.transform = `translateX(-${offset}px)`;
        activeDots(slideIndex);
    });
});*/


