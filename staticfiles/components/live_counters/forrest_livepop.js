function forrest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1609;
var increase = Math.round(passed*5.85954901378751e-13*population);
document.getElementById("forrest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forrest_livepop, 500);
}
