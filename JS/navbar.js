console.log("Welcome to Raj's Portfolio");
console.log("Develop by Raj Desai");

let drower = document.querySelector('#drower');
let baricon = document.querySelector('#bar');
let closeicon = document.querySelector('#close');

function DoOpen() {
    drower.style.display = "flex";
    baricon.style.display = "none";
    closeicon.style.display = "block";
}

function DoClose() {
    drower.style.display = "none";
    baricon.style.display = "block";
    closeicon.style.display = "none";
}