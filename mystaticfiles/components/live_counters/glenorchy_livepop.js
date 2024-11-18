function glenorchy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11063;
var increase = Math.round(passed*3.11345898010965e-13*population);
document.getElementById("glenorchy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenorchy_livepop, 500);
}
