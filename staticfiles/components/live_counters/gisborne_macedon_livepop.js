function gisborne_macedon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20219;
var increase = Math.round(passed*7.32328278942241e-13*population);
document.getElementById("gisborne_macedon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gisborne_macedon_livepop, 500);
}
