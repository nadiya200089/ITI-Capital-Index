const button = document.querySelector('.partners__button');
const logoWrap = document.querySelector('.partners__logo-wrap');

button.addEventListener('click', (e) => {
    logoWrap.classList.add('partners__logo-wrap_scroll');
})


