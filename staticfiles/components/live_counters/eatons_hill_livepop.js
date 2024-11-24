function eatons_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7972;
var increase = Math.round(passed*-1.50970702801716e-14*population);
document.getElementById("eatons_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eatons_hill_livepop, 500);
}
