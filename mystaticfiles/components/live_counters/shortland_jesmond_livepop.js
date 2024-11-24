function shortland_jesmond_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11544;
var increase = Math.round(passed*8.59420074833621e-13*population);
document.getElementById("shortland_jesmond_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shortland_jesmond_livepop, 500);
}
