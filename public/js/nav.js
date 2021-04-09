const burger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");
const sectionLinks = document.querySelectorAll("a[href^='#']");

sectionLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.attributes.href.value);
        scrollTo({
            top: target.offsetTop - 20,
            behavior: "smooth"
        });
        // if on mobile, the menu will close after selecting section
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (vw < 768) {
            toggleMenu();
        }
    });
});

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        burger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => {
            item.classList.add("open");
        });
        showMenu = true;
    }
    else {
        burger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => {
            item.classList.remove("open");
        });
        showMenu = false;
    }
}