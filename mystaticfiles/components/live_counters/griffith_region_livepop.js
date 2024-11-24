function griffith_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12880;
var increase = Math.round(passed*9.72498985293426e-14*population);
document.getElementById("griffith_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(griffith_region_livepop, 500);
}
