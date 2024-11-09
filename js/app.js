document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');

    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });
});

const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});


const openButtons = document.querySelectorAll('.btn-login');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
    });
});