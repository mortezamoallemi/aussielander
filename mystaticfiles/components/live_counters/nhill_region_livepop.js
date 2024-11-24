function nhill_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6888;
var increase = Math.round(passed*-2.7742610960716e-13*population);
document.getElementById("nhill_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nhill_region_livepop, 500);
}
