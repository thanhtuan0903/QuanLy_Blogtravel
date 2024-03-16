const swiper = new Swiper ('.swiper', {
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previuos slides 
            translate: [0, 0, -400],
        },
        next: {
            // will set `translateX(100%), on next slides 
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction:"horizontal",

    autoplay: {
        delay: 5000,
    },
    speed:400,
    spaceBetween: 100,
});

// Chuyển động hình ảnh thanh trượt chậm 5 giây

const swiper2 = new Swiper ('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    autoplay: {
        delay: 5000,
    },
    speed:400,



    breakpoints: {

        // Khi chiều rộng của webside là >= 320px
        320: {
            slidesPerView: 1,
        },

        // Khi chiều rộng của webside là >= 480px
        480: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 640px
        640: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 768px
        768: {
            slidesPerView: 2,
        },
        // Khi chiều rộng của webside là >= 900px
        897: {
            slidesPerView: 2,
        },
        // Khi chiều rộng của webside là >= 900px
        968: {
            slidesPerView: 2,
        },
        // Khi chiều rộng của webside là >= 1024px
        1024: {
            slidesPerView: 3,
        },
    }    
});

// Chuyển động hình ảnh thanh trượt Travel Countries chậm 5 giây

const swiper3 = new Swiper ('.swiper3', {
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    autoplay: {
        delay: 5000,
    },
    speed:400,



    breakpoints: {

        // Khi chiều rộng của webside là >= 320px
        320: {
            slidesPerView: 1,
        },

        // Khi chiều rộng của webside là >= 480px
        480: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 640px
        640: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 768px
        768: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 897px
        897: {
            slidesPerView: 2,
        },
        // Khi chiều rộng của webside là >= 968px
        968: {
            slidesPerView: 2,
        },
        // Khi chiều rộng của webside là >= 1024px
        1024: {
            slidesPerView: 2,
        },
    }    
});
// Thanh trượt cho User và đánh giá
const swiper4 = new Swiper ('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 95,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    autoplay: {
        delay: 5000,
    },
    speed:400,



    breakpoints: {

        // Khi chiều rộng của webside là >= 320px
        320: {
            slidesPerView: 1,
        },

        // Khi chiều rộng của webside là >= 480px
        480: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 640px
        640: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 768px
        768: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 897px
        897: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 968px
        968: {
            slidesPerView: 1,
        },
        // Khi chiều rộng của webside là >= 1024px
        1024: {
            slidesPerView: 1,
        },
    }    
});