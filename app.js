const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

burger.addEventListener('click', () => /* Ce que fait l'icône du menu quand elle est cliquée */
{
    menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    nav.classList.toggle('active');
});

var btn = document.querySelector('input');
var txt = document.querySelector('p');
