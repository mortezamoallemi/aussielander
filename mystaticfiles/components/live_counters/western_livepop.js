function western_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 74;
var increase = Math.round(passed*-2.45613133577482e-12*population);
document.getElementById("western_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(western_livepop, 500);
}
