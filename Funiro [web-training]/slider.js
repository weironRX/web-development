if (document.querySelector(".slider-main__body")) {
    new Swiper(".slider-main__body", {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: false,
        loopAdditionalSlides: 1,
        preloadImages: false,
        parallax: true,
        direction: "horizontal",

        pagination: {
            el: ".controls-slider-main__dotts",
            clickable: true,
        },

        navigation: {
            nextEl: '.slider-arrow_next',
            prevEl: '.slider-arrow_prev',
        },
    })
}