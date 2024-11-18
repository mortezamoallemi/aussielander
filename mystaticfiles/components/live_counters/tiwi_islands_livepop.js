function tiwi_islands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2452;
var increase = Math.round(passed*-3.20254368501032e-13*population);
document.getElementById("tiwi_islands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tiwi_islands_livepop, 500);
}
