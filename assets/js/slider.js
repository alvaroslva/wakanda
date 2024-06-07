let swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 3,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        750: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 8000,
    },
});

let swiper2 = new Swiper(".slide-content2", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        750: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 9000,
    },
});