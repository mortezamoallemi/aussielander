function gympie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20965;
var increase = Math.round(passed*4.55834421200941e-13*population);
document.getElementById("gympie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gympie_livepop, 500);
}
