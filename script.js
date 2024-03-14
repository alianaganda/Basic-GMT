const burgir = document.querySelector(".burgir__menu")
const hNav = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");
})