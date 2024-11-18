function bracken_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16935;
var increase = Math.round(passed*5.11360060987935e-14*population);
document.getElementById("bracken_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bracken_ridge_livepop, 500);
}
