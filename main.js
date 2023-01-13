const $menuEmail = document.querySelector(".navbar-email");
const $burgerMenu = document.querySelector(".menu");
const $shoppingCartBtn = document.querySelector(".navbar-shopping-cart");
const $desktopMenu = document.querySelector(".desktop-menu");
const $mobileMenu = document.querySelector(".mobile-menu");
const $shoppingCart = document.querySelector(".product-detail");

function closeShoppingCart() {
    const isShoppingCartOpen = !$shoppingCart.classList.contains("inactive");

    if (isShoppingCartOpen) {
        $shoppingCart.classList.add("inactive");
    }
}

function toggleDesktopMenu() {
    closeShoppingCart();
    $desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    closeShoppingCart();
    $mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    const isMobileMenuOpen = !$mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = !$desktopMenu.classList.contains("inactive");

    if (isMobileMenuOpen) {
        $mobileMenu.classList.add("inactive");
    }

    if (isDesktopMenuOpen) {
        $desktopMenu.classList.add("inactive");
    }

    $shoppingCart.classList.toggle("inactive");
}

$menuEmail.addEventListener("click", toggleDesktopMenu);
$burgerMenu.addEventListener("click", toggleMobileMenu);
$shoppingCartBtn.addEventListener("click", toggleShoppingCart);
