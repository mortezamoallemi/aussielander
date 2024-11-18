function beechworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4566;
var increase = Math.round(passed*4.99761669581959e-13*population);
document.getElementById("beechworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beechworth_livepop, 500);
}
