const $menuEmail = document.querySelector(".navbar-email");
const $burgerMenu = document.querySelector(".menu");
const $desktopMenu = document.querySelector(".desktop-menu");
const $mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu() {
    $desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    $mobileMenu.classList.toggle("inactive");
}

$menuEmail.addEventListener("click", toggleDesktopMenu);
$burgerMenu.addEventListener("click", toggleMobileMenu);
