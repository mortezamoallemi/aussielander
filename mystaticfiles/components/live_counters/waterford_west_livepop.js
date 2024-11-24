function waterford_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7243;
var increase = Math.round(passed*2.05558841667942e-13*population);
document.getElementById("waterford_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waterford_west_livepop, 500);
}
