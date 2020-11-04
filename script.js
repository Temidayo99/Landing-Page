function openNav() {
  document.getElementById("myLinks").style.width = "100%";
}

function closeNav() {
  document.getElementById("myLinks").style.width = "0";
}


// function to change background color
var bodyBg = document.getElementById("main_container");

function lightblue(){
  bodyBg.setAttribute("id", "bluediv");
  
}
function pink(){
  bodyBg.setAttribute("id", "pinkdiv");
  document.getElementById("nav_container").style.color = "black";
  document.getElementById("button").style.background = "white";
  document.getElementById("button").style.color = "black";
}
function yellow(){
  bodyBg.setAttribute("id", "yellowdiv");
  document.getElementById("content").style.color = "black";
}
function white(){
  bodyBg.setAttribute("id", "whitediv");
  document.getElementById("content").style.color = "black";
  document.getElementById("nav_container").style.color = "black";
}