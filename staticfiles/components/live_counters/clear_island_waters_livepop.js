function clear_island_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4118;
var increase = Math.round(passed*2.09800030969342e-13*population);
document.getElementById("clear_island_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clear_island_waters_livepop, 500);
}
