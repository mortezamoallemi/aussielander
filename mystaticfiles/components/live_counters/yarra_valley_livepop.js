function yarra_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16158;
var increase = Math.round(passed*6.826801462273e-14*population);
document.getElementById("yarra_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarra_valley_livepop, 500);
}
