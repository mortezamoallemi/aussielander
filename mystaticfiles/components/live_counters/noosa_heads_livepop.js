function noosa_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4489;
var increase = Math.round(passed*7.36211821858248e-13*population);
document.getElementById("noosa_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(noosa_heads_livepop, 500);
}
