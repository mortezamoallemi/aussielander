function oakleigh_huntingdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21291;
var increase = Math.round(passed*3.22619672013741e-13*population);
document.getElementById("oakleigh_huntingdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oakleigh_huntingdale_livepop, 500);
}
