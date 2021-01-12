// Your code goes here
//Task 2: Create listeners for 10 types of events
const navLinks = document.querySelectorAll(".nav > a");
navLinks[0].addEventListener("mouseover", event => navLinks[0].innerHTML = "We...");
navLinks[0].addEventListener("mouseout", event => navLinks[0].innerText = "Home");
navLinks[1].addEventListener("mouseover", event => navLinks[1].innerHTML = "Are, uh");
navLinks[1].addEventListener("mouseout", event => navLinks[1].innerText = "About Us");
navLinks[2].addEventListener("mouseover", event => navLinks[2].innerHTML = "Kinda");
navLinks[2].addEventListener("mouseout", event => navLinks[2].innerText = "Blog");
navLinks[3].addEventListener("mouseover", event => navLinks[3].innerHTML = "Useless");
navLinks[3].addEventListener("mouseout", event => navLinks[3].innerText = "Contact");
const welcome = document.querySelector(".intro h2");
const body = document.querySelector("body");
body.addEventListener("wheel", event => {
    welcome.innerText = "YOU BETTER READ THE WHOLE DAMN THING!"
    welcome.style.color = "red";
    welcome.style.backgroundColor = "yellow";
});
/*
let busImage = document.querySelector(".intro > img");
busImage.setAttribute("draggable", "true");
busImage.setAttribute("ondragstart", "drag(event)");
//console.log(busImage);

let mapImage = document.querySelectorAll(".img-content > img")[0];

let imageContent = document.querySelector(".img-content");
imageContent.setAttribute("ondrop", "drop(event)");

imageContent.setAttribute("ondragover", event => mapImage.setAttribute("src","fun-busImage.jpg"));
//console.log(imageContent);
*/

let textContent = document.querySelectorAll(".text-content > h2");
textContent[0].setAttribute("draggable", "true");
textContent[0].addEventListener("dragstart", event => textContent[0].textContent = "PUT ME DOWN!!");
textContent[0].addEventListener("dragend", event => textContent[0].textContent = "Let's Go!");


console.log(textContent);

document.addEventListener("keydown", event => document.querySelector("h1").innerText = `Key ${event.key} pressed!`);
window.addEventListener("offline", event => alert("You are disconnected."));
window.addEventListener("online", event => alert("Welcome back!"));
window.addEventListener("resize", event => document.querySelector("body").style.backgroundColor = "green");
const bottomButtons = document.querySelectorAll(".btn");
bottomButtons[0].addEventListener("dblclick", event => bottomButtons[1].style.backgroundColor = "black");
bottomButtons[1].addEventListener("dblclick", event => bottomButtons[2].style.backgroundColor = "red");
bottomButtons[2].addEventListener("dblclick", event => bottomButtons[0].style.backgroundColor = "purple");