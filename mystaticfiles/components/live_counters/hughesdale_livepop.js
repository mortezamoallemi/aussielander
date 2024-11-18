function hughesdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7558;
var increase = Math.round(passed*4.3856891616727e-13*population);
document.getElementById("hughesdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hughesdale_livepop, 500);
}
