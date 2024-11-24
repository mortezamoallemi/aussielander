function kilmore_broadford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13872;
var increase = Math.round(passed*9.47439238984647e-13*population);
document.getElementById("kilmore_broadford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kilmore_broadford_livepop, 500);
}
