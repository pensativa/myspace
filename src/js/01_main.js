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