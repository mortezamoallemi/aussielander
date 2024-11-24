function gilmore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2751;
var increase = Math.round(passed*-2.04157920659648e-13*population);
document.getElementById("gilmore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gilmore_livepop, 500);
}
