'use strict'; 

'use strict'; 

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]"); // FIXED

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function(elem){
    for (let i = 0; i < elem.length; i++) { // FIXED
        elem[i].addEventListener("click", function() { // FIXED
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

// sticky header and go-top btn
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function(){
    if(window.scrollY >= 200){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});