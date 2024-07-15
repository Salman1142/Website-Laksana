const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

menuBar.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu() {
    if (menu.classList.contains('tampil')){
        menu.classList.remove('tampil');
        iconBars.style.display='inline';
        iconClose.style.display='none';
    } else {
        menu.classList.add('tampil');
        iconBars.style.display='Close';
        iconClose.style.display='inline';
    }
}
