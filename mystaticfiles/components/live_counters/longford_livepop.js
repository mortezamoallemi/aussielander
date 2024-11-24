function longford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4014;
var increase = Math.round(passed*4.21319691959221e-13*population);
document.getElementById("longford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(longford_livepop, 500);
}
