function horsham_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3407;
var increase = Math.round(passed*-9.30042459794005e-15*population);
document.getElementById("horsham_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(horsham_region_livepop, 500);
}
