const swiper_docs_1 = new Swiper('.docs-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  autoHeight: true,
  navigation: {
    prevEl: '.docs-slider .prev',
    nextEl: '.docs-slider .next'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
 
})

const swiper_docs_2 = new Swiper('.docs-swiper-2', {


  navigation: {
    prevEl: '.docs-slider-2 .prev',
    nextEl: '.docs-slider-2 .next'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
})

const swiper_docs_3 = new Swiper('.docs-swiper-3', {
  slidesPerView: 3,
  spaceBetween: 20, 

 

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
})