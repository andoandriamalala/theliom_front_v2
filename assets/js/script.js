// external js: masonry.pkgd.js

$('.grid').masonry({
    itemSelector: '.grid-item',
    // columnWidth: 160
});

/**
   * Gallery Slider
   */
new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 7,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 9,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 30
        }
    }
});