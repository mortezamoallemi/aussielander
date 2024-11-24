function holt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4623;
var increase = Math.round(passed*-2.56750978911668e-13*population);
document.getElementById("holt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(holt_livepop, 500);
}
