// scroll to top functionality

const ScrollUp = document.querySelector("#scroll-up");

ScrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
});

// nav hamburger selection

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click" , () => {
    ul.classList.toggle("show");
});

// close hamburger menu when an item is clicked

// select nav

const navLinks =document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);