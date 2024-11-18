function middle_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7142;
var increase = Math.round(passed*5.36181086254889e-13*population);
document.getElementById("middle_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(middle_ridge_livepop, 500);
}
