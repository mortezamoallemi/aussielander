function palm_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2443;
var increase = Math.round(passed*2.75896148360993e-13*population);
document.getElementById("palm_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(palm_island_livepop, 500);
}
