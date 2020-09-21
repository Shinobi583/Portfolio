const burger = $('.menu-btn-burger');
const nav = $('.nav');
const menuNav = $('.menu-nav');
const navItems = $('.menu-nav-item');

$('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if ( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);

        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (vw < 768) {
            toggleMenu();
        }
    }
});

$('.menu-btn').on('click', toggleMenu);

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        burger.addClass("open");
        nav.addClass("open");
        menuNav.addClass("open");
        navItems.addClass("open");
        showMenu = true;
    }
    else {
        burger.removeClass("open");
        nav.removeClass("open");
        menuNav.removeClass("open");
        navItems.removeClass("open");
        showMenu = false;
    }
}