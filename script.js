//function myFunction() {
//  var x = document.getElementById("myLinks");
//  if (x.style.display === "block") {
//    x.style.display = "none";
//  } else {
//    x.style.display = "block";
//  }
//}

function openNav() {
  document.getElementById("myLinks").style.width = "100%";
}

function closeNav() {
  document.getElementById("myLinks").style.width = "0";
}


var bodyBg = document.getElementById("main_container");


function lightblue(){
  bodyBg.setAttribute("id", "bluediv");
}
function pink(){
  bodyBg.setAttribute("id", "pinkdiv");
}
function yellow(){
  bodyBg.setAttribute("id", "yellowdiv")
}function white(){
  bodyBg.setAttribute("id", "whitediv")
}