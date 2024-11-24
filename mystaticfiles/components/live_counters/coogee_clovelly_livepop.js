function coogee_clovelly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25455;
var increase = Math.round(passed*4.60816318810538e-13*population);
document.getElementById("coogee_clovelly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coogee_clovelly_livepop, 500);
}
