function lowood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14047;
var increase = Math.round(passed*9.86728614003049e-13*population);
document.getElementById("lowood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lowood_livepop, 500);
}
