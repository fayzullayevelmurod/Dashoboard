let header_burger = document.querySelector('.header_burger');
let bg = document.querySelector('.bg');
let media_aside = document.querySelector('.media_aside');
let media_aside_close = document.querySelector('.media_aside_close');

header_burger.addEventListener('click', () => {
    bg.classList.add('active');
    media_aside.classList.add('active');
});

bg.addEventListener('click', () => {
    bg.classList.remove('active');
    media_aside.classList.remove('active');
});

media_aside_close.addEventListener('click', () => {
    bg.classList.remove('active');
    media_aside.classList.remove('active');
});


// select
let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})
// select