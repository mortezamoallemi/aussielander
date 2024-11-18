function ballajura_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18746;
var increase = Math.round(passed*-1.13330107366606e-13*population);
document.getElementById("ballajura_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballajura_livepop, 500);
}
