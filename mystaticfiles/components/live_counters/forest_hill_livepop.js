function forest_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10623;
var increase = Math.round(passed*3.51023146596104e-13*population);
document.getElementById("forest_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forest_hill_livepop, 500);
}
