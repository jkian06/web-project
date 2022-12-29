const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu .close-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const remove= document.querySelector(".mobile-menu ul ");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 60) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled")
    }
    else{
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled")
    }
});


menuIcon.addEventListener("click", () =>{
    mobileMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});  

remove.addEventListener("click", () =>{
    mobileMenu.classList.remove("active");
});
