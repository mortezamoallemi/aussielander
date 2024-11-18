function northern_territory_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 228838;
var increase = Math.round(passed*4.86408923359313e-13*population);
document.getElementById("northern_territory_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northern_territory_livepop, 500);
}
