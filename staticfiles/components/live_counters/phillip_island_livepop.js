function phillip_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10380;
var increase = Math.round(passed*6.24892784214145e-13*population);
document.getElementById("phillip_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(phillip_island_livepop, 500);
}
