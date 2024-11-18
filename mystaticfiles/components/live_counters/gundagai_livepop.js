function gundagai_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3596;
var increase = Math.round(passed*3.71444727511602e-14*population);
document.getElementById("gundagai_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gundagai_livepop, 500);
}
