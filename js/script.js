const pageHeader = document.querySelector('.page-header');
const pageFooter = document.querySelector('.page-footer');
const pageBackdrop = document.querySelector('.modal-backdrop');
pageHeader.innerHTML = await fetch('/partials/header.html').then(res => res.text());
pageFooter.innerHTML = await fetch('/partials/footer.html').then(res => res.text());
pageBackdrop.innerHTML = await fetch('/partials/burger-backdrop.html').then(res => res.text());

const burgerButton = document.querySelector('.burger-button');
const burgerClose = document.querySelector('.burger-close');
const backdrop = document.querySelector('.modal-backdrop');
const burgerMenu = document.querySelector('.burger-menu-wrapper');
const burgerToggle = e => {
    backdrop.classList.toggle('is-visible');
    burgerMenu.classList.toggle('is-open');
};
burgerButton.addEventListener('click', burgerToggle);

burgerClose.addEventListener('click', burgerToggle);