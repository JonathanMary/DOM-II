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
const intro = document.querySelector(".intro");
intro.addEventListener("wheel", event => {
    welcome.innerText = "YOU BETTER READ THE WHOLE DAMN THING!"
    welcome.style.color = "red";
    welcome.style.backgroundColor = "yellow";
});
/*
let busImage = document.querySelector(".intro > img");
busImage.setAttribute("draggable", "true");
busImage.setAttribute("ondragstart", "drag(event)");
busImage.setAttribute("id", "drag1");
console.log(busImage);
let mapImage = document.querySelectorAll(".img-content > img")[0];
let imageContent = document.querySelector(".img-content");
imageContent.setAttribute("ondrop", "drop(event)");
imageContent.setAttribute("ondragover", "allowDrop(event)");
console.log(imageContent);

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
*/

document.addEventListener("keydown", event => document.querySelector("h1").innerText = `Key ${event.key} pressed!`);
window.addEventListener("offline", event => alert("You are disconnected."));
window.addEventListener("online", event => alert("Welcome back!"));
window.addEventListener("resize", event => document.querySelector("body").style.backgroundColor = "green");
const bottomButtons = document.querySelectorAll(".btn");
bottomButtons[0].addEventListener("dblclick", event => bottomButtons[1].style.backgroundColor = "black");
bottomButtons[1].addEventListener("dblclick", event => bottomButtons[2].style.backgroundColor = "red");
bottomButtons[2].addEventListener("dblclick", event => bottomButtons[0].style.backgroundColor = "purple");