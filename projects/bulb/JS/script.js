console.log("Welcome to Bulb Programe");
console.log("Develop by Raj Desai");

let onbtn = document.querySelector('#onbtn');
let offbtn = document.querySelector('#offbtn');
let offbulb = document.querySelector('.off-bulb');
let onbulb = document.querySelector('.on-bulb');

function on() {
    console.log("Bulb is On");
    document.getElementById('tap').play();
    offbulb.style.display = "none";
    onbulb.style.display = "block";
    onbtn.style.display = "none";
    offbtn.style.display = "block";
}

function  off() {
    console.log("Bulb is Off");
    document.getElementById('tap').play();
    offbulb.style.display = "block";
    onbulb.style.display = "none";
    onbtn.style.display = "block";
    offbtn.style.display = "none";
}