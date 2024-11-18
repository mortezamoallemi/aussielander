function chiltern_indigo_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3097;
var increase = Math.round(passed*4.36526115911066e-13*population);
document.getElementById("chiltern_indigo_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chiltern_indigo_valley_livepop, 500);
}
