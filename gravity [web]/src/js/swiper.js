const swiper = new Swiper(".swiper-services", {
    slidesPerView: 1.332,
    loop: false,
    direction: 'horizontal',
    spaceBetween: 10,

    navigation: {
        nextEl: '.controls-services__arrow-right',
        prevEl: '.controls-services__arrow-left',
    },

    breakpoints: {
        768: {
            spaceBetween: 30
        }
    }
})




