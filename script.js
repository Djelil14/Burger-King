document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icons');
    const menu = document.querySelector('.menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }
}); 