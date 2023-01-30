let triangle = document.getElementById("triangle");
let circle = document.getElementById("circle");
let square = document.getElementById("square");
let button = document.getElementById("reset");
let geometric = document.getElementById("div-geometric");

geometric.onclick = function hiddenElements(){
    if (document.getElementById("triangle").style.visibility = "hidden");
    if (document.getElementById("circle").style.visibility = "hidden");
    if (document.getElementById("square").style.visibility = "hidden");
} 

button.onclick = function showElements(triangle,circle,square){
    if (document.getElementById("triangle").style.visibility = "visible");
    if (document.getElementById("circle").style.visibility = "visible");
    if (document.getElementById("square").style.visibility = "visible");
}

