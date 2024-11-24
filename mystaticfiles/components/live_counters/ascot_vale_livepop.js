function ascot_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14745;
var increase = Math.round(passed*5.70265813547802e-13*population);
document.getElementById("ascot_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ascot_vale_livepop, 500);
}
