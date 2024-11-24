function gawler_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19796;
var increase = Math.round(passed*7.3633188998079e-13*population);
document.getElementById("gawler_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gawler_south_livepop, 500);
}
