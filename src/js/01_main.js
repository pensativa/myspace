//Change lang 
const changeLang = function() {
    const langs = document.querySelectorAll('.header__lang .no-btn');
    langs.forEach(lang => {
        lang.onclick = function() {
            langs.forEach(element => {
                element.classList.remove('active');
            });
            lang.classList.add('active');
        }
    });
}
changeLang();

//Показать пароль
const showPassword = function() {
    const showPasswordButton = document.querySelectorAll('.show-password');
    showPasswordButton.forEach(element => {
        element.onclick = function() {
            const input = element.previousSibling;
            console.log(input);
            if (element.classList.contains('open')) {
                element.classList.remove('open');
                input.setAttribute('type', 'password');
            } else {
                element.classList.add('open');
                input.setAttribute('type', 'text');
            }
        }
    });
};
showPassword();

//Edit personal data scripts

const editData = function() {
    const buttons = document.querySelectorAll('.cabinet__edit');
    if (!buttons) {
        return;
    }
    buttons.forEach(button => {
        button.onclick = function() {
            const parent = button.parentNode;
            const inputs = parent.querySelectorAll('input');
            parent.classList.toggle('editing');
            if (parent.classList.contains('editing')) {
                inputs.forEach(input => {
                    input.removeAttribute('disabled');
                });
            } else {
                inputs.forEach(input => {
                    input.setAttribute('disabled', 'disabled');
                });
            }
        }
    });
}
editData();

//Catalog view slider
var swiper = new Swiper(".catalog__slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Catalog buttons make active

const buttonMakeActive = function() {
    const buttons = document.querySelectorAll('.catalog__footer-btns .no-btn');
    if (!buttons) {
        return;
    }
    buttons.forEach(element => {
        element.onclick = function() {
            element.classList.toggle('active');
        }
    });
}
buttonMakeActive();

//Filter scripts 
const rangeBg = function() {
    const range = document.querySelector('.filter__range');
    if(!range) {
        return;
    }
    let rangeMaxValue = document.querySelector('.filter__range').max;
    const fillRange = document.querySelector('.filter__range-fill')
    range.oninput = function() {
        let val = (range.value / rangeMaxValue) * 100;
        fillRange.style.background = 'linear-gradient(to right, #D57800 0%, #D57800 ' + val + '%, #707070 ' + val + '%,  #707070 100%)';
    }
};
rangeBg();

const showMobileFilter = function() {
    let toggleArea = document.querySelector('.filter--front');
    const toggle = document.querySelector('.filter__front-toggle');
    if(!toggle) {
        return;
    }
    if(!toggleArea) {
        toggleArea = document.querySelector('.catalog__banner');
    }
    toggle.onclick = function() {
        toggleArea.classList.toggle('show');
    }
}
showMobileFilter();

//Product slider
var swiperThumbs = new Swiper(".product__thumbs", {
    spaceBetween: 5,
    slidesPerView: 3,
    direction: "horizontal",
    watchSlidesProgress: true,
    breakpoints: {
        992: {
            direction: "vertical",
            spaceBetween: 20,
        },
    },
  });
  var swiperProduct = new Swiper(".product__slider", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

//News slider

var swiperNews = new Swiper(".new__slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//Imigration slider

var swiperIm = new Swiper(".imigration__catalog", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
});
