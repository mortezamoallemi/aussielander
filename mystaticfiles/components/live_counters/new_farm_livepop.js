function new_farm_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12787;
var increase = Math.round(passed*5.48261572074681e-13*population);
document.getElementById("new_farm_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(new_farm_livepop, 500);
}
