/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn, addEventListener('click', switchModal);

});
*/


$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
});

$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 120);
    prev.css('right', next.width() + 120);

    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlenght: 7
            },
            userPhone: "required",
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlenght: "Имя не короче семи букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        }
    });

    // маска для телефона
    $('[type-tell]').mask('+7(000) 00-00-000', { placeholder: "=7 (__) __-__-___" });

});