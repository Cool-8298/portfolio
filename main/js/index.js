let username = prompt("Enter your name:");
let span = document.querySelector(".input .label span");

span.innerText = username ? username : "Guest";
