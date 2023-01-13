const $menuEmail = document.querySelector(".navbar-email");
const $burgerMenu = document.querySelector(".menu");
const $shoppingCartBtn = document.querySelector(".navbar-shopping-cart");
const $desktopMenu = document.querySelector(".desktop-menu");
const $mobileMenu = document.querySelector(".mobile-menu");
const $shoppingCart = document.querySelector(".product-detail");
const $cardsContainer = document.querySelector(".cards-container");

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

const productList = [
    {
        name: "Bike",
        price: 120.0,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Bike",
        price: 120.0,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Bike",
        price: 120.0,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Bike",
        price: 120.0,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name: "Bike",
        price: 120.0,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

function renderProducts(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoData = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productAddToCart = document.createElement("figure");

    const productAddToCartImg = document.createElement("img");
    productAddToCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productAddToCart.append(productAddToCartImg);
    productInfoData.append(productPrice, productName);
    productInfo.append(productInfoData, productAddToCart);
    productCard.append(productImg, productInfo);
    $cardsContainer.append(productCard);
}

productList.forEach(function (product) {
    renderProducts(product);
});
