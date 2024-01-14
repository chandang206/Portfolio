/* header follow when scrolling */
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

/* menu bar when using mobile */
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

/* remove the menu bar when scrolling (mobile) */
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

