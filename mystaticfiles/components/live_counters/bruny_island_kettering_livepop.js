function bruny_island_kettering_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2947;
var increase = Math.round(passed*3.33573562810717e-13*population);
document.getElementById("bruny_island_kettering_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bruny_island_kettering_livepop, 500);
}
