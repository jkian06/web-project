const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu .close-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const remove= document.querySelector(".mobile-menu ul ");
const st =document.querySelector("nav ul .id1");
const nd =document.querySelector("nav ul .id2");
const rd =document.querySelector("nav ul .id3");
const rth =document.querySelector("nav ul .id4");
const th =document.querySelector("nav ul .id5");

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

window.addEventListener("scroll", () =>{
    if (window.pageYOffset < 1){
        st.classList.add("haha");
    }
    else if (window.pageYOffset <640){
        st.classList.add("haha");
    }
    else if (window.pageYOffset >= 640){
        st.classList.remove("haha");
    }

});

window.addEventListener("scroll", () =>{
    if (window.pageYOffset < 640){
        nd.classList.remove("haha");
    }
    else if (window.pageYOffset < 640){
        nd.classList.add("haha");
    }
    else if (window.pageYOffset < 1428){
        nd.classList.add("haha");
    }
    else if (window.pageYOffset >= 1428){
        nd.classList.remove("haha");
    }

});
window.addEventListener("scroll", () =>{
    if (window.pageYOffset < 1428){
        rd.classList.remove("haha");
    }
    else if (window.pageYOffset < 1428){
        rd.classList.add("haha");
    }
    else if (window.pageYOffset < 2230){
        rd.classList.add("haha");
    }
    else if (window.pageYOffset >= 2230){
        rd.classList.remove("haha");
    }

});

window.addEventListener("scroll", () =>{
    if (window.pageYOffset < 2380){
        rth.classList.remove("haha");
    }
    else if (window.pageYOffset < 2380){
        rth.classList.add("haha");
    }
    else if (window.pageYOffset < 3180){
        rth.classList.add("haha");
    }
    else if (window.pageYOffset >= 3180){
        rth.classList.remove("haha");
    }

});

window.addEventListener("scroll", () =>{
    if (window.pageYOffset < 3180){
        th.classList.remove("haha");
    }
    
    else{
        th.classList.add("haha");
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
