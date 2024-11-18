function sunshine_coast_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 307545;
var increase = Math.round(passed*8.07635545427142e-13*population);
document.getElementById("sunshine_coast_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunshine_coast_livepop, 500);
}
