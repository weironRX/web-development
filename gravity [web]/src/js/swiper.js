new Swiper(".swiper-services", {
    slidesPerView: 1.332,
    loop: false,
    direction: 'horizontal',
    spaceBetween: 10,

    navigation: {
        nextEl: '.services-next',
        prevEl: '.services-prev',
    },

    breakpoints: {
        768: {
            spaceBetween: 30
        }
    }
})


new Swiper(".swiper-testimonials", {
    slidesPerView: 1,
    loop: false,
    parallax: true,

    navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
    },

    autoplay: {
        delay: 5000,
    }
})




