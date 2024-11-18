function hoppers_crossing_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19225;
var increase = Math.round(passed*8.2008509894349e-14*population);
document.getElementById("hoppers_crossing_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hoppers_crossing_north_livepop, 500);
}
