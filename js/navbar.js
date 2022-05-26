var rimColor = "#0000ff";
var handColor = "#0000ff";
var boxColor = "#0000ff";
var boxborderColor = "#0000ff";
var bgColor = "#0000ff";
var bdthickness = "2px";

const colorWellrim = document.querySelector("#colorWellrim");
const colorWellhand = document.querySelector("#colorWellhand");
const colorWellbox = document.querySelector("#colorWellbox");
const colorWellBoxborder = document.querySelector("#colorWellboxborder");
const colorWellbg = document.querySelector("#colorWellbg");
const borderthickness = document.querySelector("#borderthickness");
const reseter = document.querySelector("#reset");

const menu = document.querySelector(".dropbtn");
const box = document.getElementsByClassName("container")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const clock = document.getElementsByClassName("clock");
const hourhand = document.getElementsByClassName("hourhand");
const minhand = document.getElementsByClassName("minhand");

window.addEventListener("load", startup, false);

function setupcolor() {
  rimColor = localStorage.getItem("rimColor") || "#503b3b";
  colorWellrim.value = rimColor;
  for (let i = 0; i < clock.length; i++) {
    clock[i].style.borderColor = rimColor;
  }

  handColor = localStorage.getItem("handColor") || "#ffffff";
  colorWellhand.value = handColor;
  for (let i = 0; i < hourhand.length; i++) {
    hourhand[i].style.backgroundColor = handColor;
    minhand[i].style.backgroundColor = handColor;
  }

  boxColor = localStorage.getItem("boxColor") || "#000000";
  colorWellbox.value = boxColor;
  box.style.backgroundColor = boxColor;

  boxborderColor = localStorage.getItem("boxborderColor") || "#ffffff";
  colorWellBoxborder.value = boxborderColor;
  box.style.borderColor = boxborderColor;

  bgColor = localStorage.getItem("bgColor") || "#000000";
  colorWellbg.value = bgColor;
  navbar.style.backgroundColor = bgColor;
  menu.style.backgroundColor = bgColor;
  document.body.style.backgroundColor = bgColor;

  bdthickness = localStorage.getItem("bdthickness") || "2";
  borderthickness.value = bdthickness;
  bdthickness += "px";
  box.style.borderWidth = bdthickness;
}

function startup() {
  setupcolor();

  colorWellrim.addEventListener("input", updaterim, false);
  colorWellrim.select();

  colorWellhand.addEventListener("input", updatehand, false);
  colorWellhand.select();

  colorWellbox.addEventListener("input", updatebox, false);
  colorWellbox.select();

  colorWellBoxborder.addEventListener("input", updateboxborder, false);
  colorWellBoxborder.select();

  colorWellbg.addEventListener("input", updatebg, false);
  colorWellbg.select();

  colorWellbg.addEventListener("input", updatebg, false);
  colorWellbg.select();

  borderthickness.addEventListener("input", updatebdthickness, false);
  borderthickness.select();

  reseter.addEventListener("click", reset, false);
}

function updaterim(event) {
  localStorage.setItem("rimColor", event.target.value);
  for (let i = 0; i < clock.length; i++) {
    clock[i].style.borderColor = event.target.value;
  }
}

function updatehand(event) {
  localStorage.setItem("handColor", event.target.value);
  for (let i = 0; i < hourhand.length; i++) {
    hourhand[i].style.backgroundColor = event.target.value;
    minhand[i].style.backgroundColor = event.target.value;
  }
}

function updatebox(event) {
  localStorage.setItem("boxColor", event.target.value);
  box.style.backgroundColor = event.target.value;
}

function updateboxborder(event) {
  localStorage.setItem("boxborderColor", event.target.value);
  box.style.borderColor = event.target.value;
}

function updatebg(event) {
  localStorage.setItem("bgColor", event.target.value);
  document.body.style.backgroundColor = event.target.value;
  navbar.style.backgroundColor = event.target.value;
  menu.style.backgroundColor = event.target.value;
}

function updatebdthickness(event) {
  localStorage.setItem("bdthickness", event.target.value);
  box.style.borderWidth = event.target.value + "px";
}

function reset() {
  localStorage.removeItem("rimColor");
  localStorage.removeItem("handColor");
  localStorage.removeItem("boxColor");
  localStorage.removeItem("boxborderColor");
  localStorage.removeItem("bgColor");
  localStorage.removeItem("bdthickness");
  setupcolor();
}
