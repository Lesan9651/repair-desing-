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
        },
        submitHandler: function(from) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function(response) {
                    consolo.log('Ajax сработал. Ответ сервера: ' + response);
                    alert('Форма отправленна, мы свяжемся с Вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function(response) {
                    console.log('Ошибка запроса ' + response);
                    ym('93033142', 'reachGoal', 'button');
                    return true;
                }
            });
        }
    });

    // маска для телефона
    $('[type=tel]').mask('+7(000) 00-00-000', { placeholder: "+7 (___) __-__-___" });
    /*
                var player;
                $('.video__play').on('click', function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        height: '465',
                        width: '100%',
                        videoId: 'RHzzLqJWqHs',
                        events: {
                            'onReady': videoPlay,
                        }
                    });
                })

                function videoPlay(event) {
                    event.target.playVideo();
                }
*/
});