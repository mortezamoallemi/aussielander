function north_lakes_mango_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 30104;
var increase = Math.round(passed*2.79310278303219e-12*population);
document.getElementById("north_lakes_mango_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_lakes_mango_hill_livepop, 500);
}
