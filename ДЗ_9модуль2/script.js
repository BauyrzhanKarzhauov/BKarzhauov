const swiper = new Swiper('.testimonials-slider', {
    loop: true,

    // Количество карточек
    slidesPerView: 3,
    spaceBetween: 24,

    // Буллеты
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Адаптивность
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
