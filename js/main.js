let header_burger = document.querySelector('.header_burger');
let bg = document.querySelector('.bg');
let media_aside = document.querySelector('.media_aside');

header_burger.addEventListener('click', () => {
    bg.classList.add('active');
    media_aside.classList.add('active');
});

bg.addEventListener('click', () => {
    bg.classList.remove('active');
    media_aside.classList.remove('active');
});