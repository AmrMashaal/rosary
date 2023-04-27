let one = document.querySelector(".one");
let reset = document.querySelector(".reset");
let span = document.querySelector("span");

one.onclick = function () {
  ++span.innerHTML;
  window.localStorage.setItem("number", span.innerHTML);
};

reset.onclick = function () {
  span.innerHTML = "0";
};

if (window.localStorage.getItem("number")) {
  span.innerHTML = window.localStorage.getItem("number");
}
