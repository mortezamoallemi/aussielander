function orange_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11607;
var increase = Math.round(passed*3.42376053130949e-13*population);
document.getElementById("orange_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(orange_region_livepop, 500);
}
