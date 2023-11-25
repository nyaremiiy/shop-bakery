// Swiper
new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 1.7,
      },
      768: {
        slidesPerView: 2.5,
      },
      1279: {
        slidesPerView: 3,
      },
    },
  });