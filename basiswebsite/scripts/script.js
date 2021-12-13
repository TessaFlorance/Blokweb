// JavaScript Document

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toonMenu); 

function toonMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.toggle("menuOpen"); 
}



var Uitklappen = document.querySelector("nav button"); 

Uitklappen.addEventListener("click", toggleMenu); 

function toggleMenu(event) {
    deNav = event.target.parentNode; 
    deNav.classList.toggle("toonMenu");
}
