function gympie_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14217;
var increase = Math.round(passed*4.65907617448802e-13*population);
document.getElementById("gympie_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gympie_north_livepop, 500);
}
