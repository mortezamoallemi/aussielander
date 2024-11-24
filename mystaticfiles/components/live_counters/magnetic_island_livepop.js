function magnetic_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2342;
var increase = Math.round(passed*4.05330237018344e-13*population);
document.getElementById("magnetic_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(magnetic_island_livepop, 500);
}
