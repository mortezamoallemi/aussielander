function narre_warren_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7758;
var increase = Math.round(passed*6.67465405592828e-13*population);
document.getElementById("narre_warren_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narre_warren_north_livepop, 500);
}
