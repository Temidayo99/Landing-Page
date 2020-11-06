//function to open the hamburger menu
function openNav() {
  document.getElementById("myLinks").style.width = "100%";
}

//function to close the hamburger menu
function closeNav() {
  document.getElementById("myLinks").style.width = "0";
}


// function to change background color
var bodyBg = document.getElementById("main_container");

function lightblue(){
  bodyBg.setAttribute("id", "bluediv");
  document.getElementById("content").style.color = "#fff";
  document.getElementById("button").style.background = "#ED48BA";
  document.getElementById("button").style.color = "#fff";
}
function pink(){
  bodyBg.setAttribute("id", "pinkdiv");
  document.getElementById("button").style.background = "#fff";
  document.getElementById("button").style.color = "#ED48BA";
}
function yellow(){
  bodyBg.setAttribute("id", "yellowdiv");
  document.getElementById("content").style.color = "black";
  document.getElementById("button").style.background = "white";
  document.getElementById("button").style.color = "black";
}
function white(){
  bodyBg.setAttribute("id", "whitediv");
  document.getElementById("content").style.color = "black";
  document.getElementById("button").style.background = "#ED48BA";
  document.getElementById("button").style.color = "#fff";
}