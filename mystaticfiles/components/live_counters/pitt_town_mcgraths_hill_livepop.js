function pitt_town_mcgraths_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10531;
var increase = Math.round(passed*9.87159492796723e-13*population);
document.getElementById("pitt_town_mcgraths_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pitt_town_mcgraths_hill_livepop, 500);
}
