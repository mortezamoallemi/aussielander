function west_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14363;
var increase = Math.round(passed*1.42441635866945e-13*population);
document.getElementById("west_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_lakes_livepop, 500);
}
