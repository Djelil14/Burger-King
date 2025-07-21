document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icons');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu ul a');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }
    // Fermer le menu quand on clique sur un lien (mobile)
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
}); 