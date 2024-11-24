function king_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1583;
var increase = Math.round(passed*8.06362852583425e-14*population);
document.getElementById("king_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(king_island_livepop, 500);
}
