function gisborne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12827;
var increase = Math.round(passed*9.31392747250852e-13*population);
document.getElementById("gisborne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gisborne_livepop, 500);
}
