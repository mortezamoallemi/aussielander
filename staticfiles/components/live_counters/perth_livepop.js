function perth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1907836;
var increase = Math.round(passed*8.40792057121689e-13*population);
document.getElementById("perth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(perth_livepop, 500);
}
