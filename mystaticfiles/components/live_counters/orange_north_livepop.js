function orange_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19729;
var increase = Math.round(passed*1.00602220890281e-12*population);
document.getElementById("orange_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(orange_north_livepop, 500);
}
