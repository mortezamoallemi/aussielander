function rocklea_acacia_ridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9559;
var increase = Math.round(passed*5.92058721684088e-13*population);
document.getElementById("rocklea_acacia_ridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rocklea_acacia_ridge_livepop, 500);
}
