const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("change", function() {
    nav.classList.toggle("slide", menuToggle.checked);
});