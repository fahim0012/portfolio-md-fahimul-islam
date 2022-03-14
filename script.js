const menuIcons = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

menuIcons.addEventListener('click', ()=>{
    menu.classList.toggle("change");
});