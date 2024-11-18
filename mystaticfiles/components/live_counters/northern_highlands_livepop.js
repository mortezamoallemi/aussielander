function northern_highlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3124;
var increase = Math.round(passed*-1.0163600780806e-12*population);
document.getElementById("northern_highlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northern_highlands_livepop, 500);
}
