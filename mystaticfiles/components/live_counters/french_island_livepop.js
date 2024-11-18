function french_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 114;
var increase = Math.round(passed*-5.53886350123957e-14*population);
document.getElementById("french_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(french_island_livepop, 500);
}
