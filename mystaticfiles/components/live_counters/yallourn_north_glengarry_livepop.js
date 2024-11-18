function yallourn_north_glengarry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4548;
var increase = Math.round(passed*1.43853122439655e-13*population);
document.getElementById("yallourn_north_glengarry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yallourn_north_glengarry_livepop, 500);
}
