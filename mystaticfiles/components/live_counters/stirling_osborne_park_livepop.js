function stirling_osborne_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13747;
var increase = Math.round(passed*2.55586025484122e-13*population);
document.getElementById("stirling_osborne_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stirling_osborne_park_livepop, 500);
}
