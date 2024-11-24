function hope_valley_modbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16429;
var increase = Math.round(passed*2.72110333299949e-13*population);
document.getElementById("hope_valley_modbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hope_valley_modbury_livepop, 500);
}
