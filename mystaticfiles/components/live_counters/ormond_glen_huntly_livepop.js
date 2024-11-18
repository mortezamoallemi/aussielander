function ormond_glen_huntly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13341;
var increase = Math.round(passed*4.78222636820434e-13*population);
document.getElementById("ormond_glen_huntly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ormond_glen_huntly_livepop, 500);
}
