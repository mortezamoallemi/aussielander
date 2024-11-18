function kangaroo_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4702;
var increase = Math.round(passed*3.97980981374199e-13*population);
document.getElementById("kangaroo_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kangaroo_island_livepop, 500);
}
