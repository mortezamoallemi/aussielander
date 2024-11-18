function taringa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8453;
var increase = Math.round(passed*4.0265178606624e-13*population);
document.getElementById("taringa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taringa_livepop, 500);
}
