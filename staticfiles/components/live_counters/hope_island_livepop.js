function hope_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11230;
var increase = Math.round(passed*1.70253550829517e-12*population);
document.getElementById("hope_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hope_island_livepop, 500);
}
