function beenleigh_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8253;
var increase = Math.round(passed*6.15052383932618e-15*population);
document.getElementById("beenleigh_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beenleigh_livepop, 500);
}