let header_burger = document.querySelector('.header_burger');
let bg = document.querySelector('.bg');
let media_aside = document.querySelector('.media_aside');
let media_aside_close = document.querySelector('.media_aside_close');

if (header_burger) {
    header_burger.addEventListener('click', () => {
        bg.classList.add('active');
        media_aside.classList.add('active');
    });
}

if (bg) {
    bg.addEventListener('click', () => {
        bg.classList.remove('active');
        media_aside.classList.remove('active');
    });
}

if (media_aside_close) {
    media_aside_close.addEventListener('click', () => {
        bg.classList.remove('active');
        media_aside.classList.remove('active');
    });
}

let fixationModal = document.querySelector('.fixation_modal'),
    fixationModalOpen = document.querySelectorAll('.fixation_modal__open'),
    fixationModalclose = document.querySelector('.fixation_modal__close');

if (fixationModal) {
    fixationModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            fixationModal.classList.remove('end-active');
            fixationModal.classList.add('active');
        }
    })

    fixationModalclose.onclick = () => {
        fixationModal.classList.remove('active');
        fixationModal.classList.add('end-active');
        setTimeout(() => {
            fixationModal.classList.remove('end-active');
        }, 300);
    }
}

let addFixationModal = document.querySelector('.add_fixation_modal'),
    addFixationModalOpen = document.querySelectorAll('.add_fixation_modal__open'),
    addFixationModalclose = document.querySelector('.add_fixation_modal__close');

if (addFixationModal) {
    addFixationModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            addFixationModal.classList.remove('end-active');
            addFixationModal.classList.add('active');
        }
    })

    addFixationModalclose.onclick = () => {
        addFixationModal.classList.remove('active');
        addFixationModal.classList.add('end-active');
        setTimeout(() => {
            addFixationModal.classList.remove('end-active');
        }, 300);
    }
}

let loginData = {
    login: document.querySelector('.loginInp'),
    password: document.querySelector('.passwordInp'),
    errorText: document.querySelector('.loginErrText')
};
let errInp = {
    inp1: false,
    inp2: false,
}
let entranceSwp = new Swiper('.entrance .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    allowTouchMove: false,
})
if (loginData.login) {
    const el = loginData.login.querySelector('input');
    el.oninput = () => {
        val = el.value;
        if (val.length < 4) {
            loginData.login.classList.remove('success')
            loginData.login.classList.add('error');
            errInp.inp1 = true;
        } else {
            loginData.login.classList.remove('error')
            loginData.login.classList.add('success')
            errInp.inp1 = false;
        }
        toggleErrText();
    }

    const el2 = loginData.password.querySelector('input');
    el2.oninput = () => {
        val = el2.value;
        if (val.length < 4) {
            loginData.password.classList.remove('success')
            loginData.password.classList.add('error');
            errInp.inp2 = true;
        } else {
            loginData.password.classList.remove('error')
            loginData.password.classList.add('success')
            errInp.inp2 = false;
        }
        toggleErrText();
    }
}

let lbl = document.querySelectorAll('label');

if (lbl.length) {
    lbl.forEach(item => {
        let inp = item.querySelector('input');
        let icon = item.querySelector('.icon_clear');
        if (inp) {
            inp.onfocus = () => {
                item.classList.add('focus');
            }

            inp.onblur = () => {
                item.classList.remove('focus');
                toggleErrText();
            }
        }

        if (icon) {
            icon.onclick = () => {
                inp.value = '';
            }
        }
    })
}

function toggleErrText () {
    if (loginData.errorText) {
        if (!errInp.inp1 && !errInp.inp2 ) {
            loginData.errorText.style.display = 'none';
        } else {
            loginData.errorText.style.display = 'block';
        }
    }
}

let toRegister = document.querySelector('.toRegister');
let toSuccessfully = document.querySelector('.toSuccessfully')
let toLogin = document.querySelector('.toLogin')
if (toRegister) {
    toRegister.onclick = e => {
        e.preventDefault();
        entranceSwp.slideTo(1);
    }

    toSuccessfully.onclick = e => {
        e.preventDefault();
        entranceSwp.slideTo(2);
    }

    toLogin.onclick = e => {
        e.preventDefault();
        entranceSwp.slideTo(0)
    }
}

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