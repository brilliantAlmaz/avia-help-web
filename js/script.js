// fancybox
Fancybox.bind("[data-fancybox]", {
   // Your custom options
});


const header = document.querySelector('header');




//...................... изменение  цвета хедера .........................................//

// функция для того, чтобы при скроле менялся цвет хедера
function windowScrollHeader() {
   if (window.pageYOffset > 0) {
      header.style.background = 'var(--dark-color)';
   }
   else {
      header.style.background = 'transparent';

   }
}

// При скролле меняет цвет хедера
window.addEventListener('scroll', windowScrollHeader);
window.addEventListener('resize', init);


//..................................... Формы ................................//

const formsInputs = document.querySelectorAll('input');

formsInputs.forEach(function (item) {
   item.parentNode.querySelector('label').addEventListener('click', () => {
      item.focus();
   })

   let valueCheck = false;
   item.addEventListener('focus', () => {
      item.parentNode.querySelector('label').classList.add('active');
   })
   item.addEventListener('focusout', () => {
      if (!valueCheck)
         item.parentNode.querySelector('label').classList.remove('active');
   })
   item.addEventListener('change', () => {
      if (!item.value) {
         valueCheck = false;
      }
      else {
         valueCheck = true;

      }
   })

})






// .............................. clients swiper ..............................//
const clientsSlides = document.querySelectorAll('#clients .swiper-slide');
const clientsSwiper = new Swiper('#clients .swiper', {
   // Optional parameters
   loop: false,
   // Navigation arrows
   navigation: {
      nextEl: '#clients .swiper-button-next',
      prevEl: '#clients  .swiper-button-prev',
   },


   breakpoints: {
      320: {
         spaceBetween: 30,
         slidesPerGroup: 1,
         slidesPerView: 1,
      },
      1051: {
         spaceBetween: 30,
         slidesPerGroup: 1,
         slidesPerView: 2,
      },
      1328: {
         spaceBetween: 30,
         slidesPerGroup: 1,
         slidesPerView: 3,
      },
      1690: {
         spaceBetween: 71,
         slidesPerGroup: 1,
         slidesPerView: 3,
      }
   }

});


clientsSlides[1].classList.add('active');


clientsSwiper.on('transitionStart', function () {

   var currentSlide = this.realIndex + 1;
   document.querySelector('.clients__current-number').innerHTML = currentSlide;
   if (window.innerWidth > 1328) {
      clientsSlides.forEach(function (item) {
         item.classList.remove('active');
      })
      clientsSlides[(this.realIndex + 1) % document.querySelectorAll('#clients .swiper-slide').length].classList.add('active');
   }
   else {
      clientsSlides.forEach(function (item) {
         item.classList.remove('active');
      });
      clientsSlides.forEach(function (item) {
         item.classList.remove('active');
      })
   }

});

document.querySelector('#clients .swiper-wrapper').style.height = document.querySelector('.clients__item ').clientHeight + 60 + "px"


// кнопка Читать далее
const clientsRead = document.querySelectorAll('.clients__more');

clientsRead.forEach(function (item) {
   // Отображать ли кнопку "Читать Далее"

   let itemTextContent = String(item.parentNode.querySelector('.clients__item-quote').innerHTML);
   itemTextContent = itemTextContent.length;
   // Если количество символо меньше 220, то не отображается кнопка читать дальше
   if (itemTextContent < 220) {
      item.style.display = 'none';
   }

   // Event клика на читать далее
   item.addEventListener('click', function () {
      item.parentNode.querySelector('.clients__item-quote').style.maxHeight = 100 + '%';
      item.parentNode.style.height = 25 + 'rem';
   })
})



// ........................ services items sameheight .................. //

const servicesItems = document.querySelectorAll('.services__item');
let max = 0;
servicesItems.forEach(function (item) {
   if (item.clientHeight > max)
      max = item.clientHeight

})
servicesItems.forEach(function (item) {
   item.style.height = max + 'px';
})


// ............. license section swiper .....................//

const licenseSlides = document.querySelectorAll('#license .swiper-slide');
const licenseSwiper = new Swiper('#license .swiper', {
   // Optional parameters
   loop: false,
   // Navigation arrows
   navigation: {
      nextEl: '#license .swiper-button-next',
      prevEl: '#license  .swiper-button-prev',
   },


   breakpoints: {
      320: {
         spaceBetween: 30,
         slidesPerGroup: 1,
         slidesPerView: 2,
      },
      691: {
         spaceBetween: 50,
         slidesPerGroup: 1,
         slidesPerView: 2,
      },
      1031: {
         spaceBetween: 50,
         slidesPerGroup: 1,
         slidesPerView: 4,
      },
      1431: {
         spaceBetween: 70,
         slidesPerGroup: 1,
         slidesPerView: 3,
      }
   }

});

document.querySelector('.license__full-number').innerHTML = licenseSlides.length - (2);
licenseSlides[1].classList.add('active');


licenseSwiper.on('transitionStart', function () {
   var currentSlide = this.realIndex + 1;
   document.querySelector('.license__current-number').innerHTML = currentSlide;
   licenseSlides.forEach(function (item) {
      item.classList.remove('active');
   })
   licenseSlides[(this.realIndex + 1) % document.querySelectorAll('#license .swiper-slide').length].classList.add('active');
});

document.querySelector('#clients .swiper-wrapper').style.height = document.querySelector('.clients__item ').clientHeight + 60 + "px"


// .................. staff section .......................... //


// .............................. staff swiper ..............................//
const staffSlides = document.querySelectorAll('#staff .swiper-slide');
const staffSwiper = new Swiper('#staff .swiper', {
   // Optional parameters
   loop: false,
   // Navigation arrows
   navigation: {
      nextEl: '#staff .swiper-button-next',
      prevEl: '#staff  .swiper-button-prev',
   },


   breakpoints: {
      280: {
         spaceBetween: 32,
         slidesPerGroup: 1,
         slidesPerView: 1,
      },
      525: {
         spaceBetween: 32,
         slidesPerGroup: 1,
         slidesPerView: 1.5,
      },
      681: {
         spaceBetween: 32,
         slidesPerGroup: 1,
         slidesPerView: 2,
      },
      751: {
         spaceBetween: 32,
         slidesPerGroup: 1,
         slidesPerView: 2.3,
      },

      1151: {
         spaceBetween: 48,
         slidesPerGroup: 1,
         slidesPerView: 3,
      },

      1471: {
         spaceBetween: 48,
         slidesPerGroup: 1,
         slidesPerView: 4,
      },
      1671: {
         spaceBetween: 71,
         slidesPerGroup: 1,
         slidesPerView: 4,
      }
   }

});


staffSwiper.on('transitionStart', function () {
   var currentSlide = this.realIndex + 1;
   document.querySelector('.staff__current-number').innerHTML = currentSlide;
   staffSlides.forEach(function (item) {
      item.classList.remove('active');
   })
});


// header бургер меню

const burger = document.querySelector('.burger__wrapper');
burger.addEventListener('click', () => {
   document.querySelector('html').classList.toggle('lock');
   document.querySelector('body').classList.toggle('lock');
   document.querySelector('.header__info').classList.toggle('active');
   document.querySelector('.burger').classList.toggle('active');
   document.querySelector('.header__line').classList.toggle('color-change')
   document.querySelector('.header').classList.toggle('active')
})



// начальная настройка 
init();

function init() {
   // проверка количества скролла для зедера
   windowScrollHeader();
   // число общего количества слайдов

   if (window.innerWidth <= 681) {
      document.querySelector('.staff__full-number').innerHTML = staffSlides.length;
   }
   else if (window.innerWidth <= 1151) {
      document.querySelector('.staff__full-number').innerHTML = staffSlides.length - (1);
   }
   else if (window.innerWidth <= 1471) {
      document.querySelector('.staff__full-number').innerHTML = staffSlides.length - (2);
   }
   else { document.querySelector('.staff__full-number').innerHTML = staffSlides.length - (3); }

   // число общего количества слайдов

   if (window.innerWidth < 1328) {
      clientsSlides.forEach(function (item) {
         item.classList.remove('active');
      })
   }
   if (window.innerWidth <= 1051) {
      document.querySelector('.clients__full-number').innerHTML = clientsSlides.length;
   }
   else if (window.innerWidth <= 1328) {
      document.querySelector('.clients__full-number').innerHTML = clientsSlides.length - 1;
   }
   else {
      document.querySelector('.clients__full-number').innerHTML = clientsSlides.length - (2);

   }

   servicesItems.forEach(function (item) {
      item.style.height = 'auto';
   })

   // число общего количества слайдов
   if (window.innerWidth <= 1031) {
      document.querySelector('.license__full-number').innerHTML = clientsSlides.length - 3;
   }
   else if (window.innerWidth <= 1431) {
      document.querySelector('.license__full-number').innerHTML = clientsSlides.length - 5;
   }
   else {
      document.querySelector('.license__full-number').innerHTML = clientsSlides.length - (4);

   }

   // отступ слева в меню как у контейнера
   document.querySelector('.header__info').style.paddingLeft = window.getComputedStyle(document.querySelector('.container  '), null).getPropertyValue('padding-left');

   document.querySelector('.header__info').style.paddingTop = document.querySelector('#header').clientHeight + 16 + 'px';

}






// lazy-loading
const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
   lazyImages.forEach(img => {
      if (img.dataset.src || img.dataset.srcset) {
         lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
         lazyScrollCheck();
      }
   })
}

function lazyScrollCheck() {
   let imgIndex = lazyImagesPositions.findIndex(
      item => pageYOffset > item - windowHeight
   );
   if (imgIndex >= 0) {
      if (lazyImages[imgIndex].dataset.src) {
         lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
         lazyImages[imgIndex].removeAttribute('data-src');

      }
      else if (lazyImages[imgIndex].dataset.datasrc) {
         lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
         lazyImages[imgIndex].removeAttribute('data-srcset');

      }
      delete lazyImagesPositions[imgIndex];
   }
}

function lazyScroll() {
   if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0)
      lazyScrollCheck();
}

window.addEventListener('scroll', lazyScroll)

