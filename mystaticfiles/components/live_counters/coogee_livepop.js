function coogee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8768;
var increase = Math.round(passed*9.71231200073409e-13*population);
document.getElementById("coogee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coogee_livepop, 500);
}
