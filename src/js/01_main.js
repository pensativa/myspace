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
    const toggle = document.querySelector('.filter--front');
    if(!toggle) {
        return;
    }
    toggle.onclick = function() {
        toggle.classList.toggle('show');
    }
}
showMobileFilter();