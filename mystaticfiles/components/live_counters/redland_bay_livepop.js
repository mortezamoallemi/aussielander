function redland_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15591;
var increase = Math.round(passed*8.55282098769834e-13*population);
document.getElementById("redland_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(redland_bay_livepop, 500);
}
