// Ambil elemen checkbox dan ul
// const menuCheckbox = document.querySelector('.menu-toggle input');
// const navMenu = document.querySelector('nav ul');

// Tambahkan event listener untuk toggle
// menuCheckbox.addEventListener('change', () => {
//     if (menuCheckbox.checked) {
//         navMenu.classList.add('slide');
//     } else {
//         navMenu.classList.remove('slide');
//     }
// });

/** creating button click show hide navbar **/
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("slide");
});