let one = document.querySelector(".one");
let reset = document.querySelector(".reset");
let span = document.querySelector("span");

one.onclick = function (){
    ++span.innerHTML
}

reset.onclick = function (){
    span.innerHTML = "0" 
}