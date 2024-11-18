function frenchs_forest_belrose_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25171;
var increase = Math.round(passed*2.80491278063773e-13*population);
document.getElementById("frenchs_forest_belrose_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(frenchs_forest_belrose_livepop, 500);
}
