function west_coast_tas_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4152;
var increase = Math.round(passed*-7.57827663752484e-13*population);
document.getElementById("west_coast_tas_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_coast_tas_livepop, 500);
}
