function west_coast_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3532;
var increase = Math.round(passed*-3.75953468872176e-14*population);
document.getElementById("west_coast_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_coast_sa_livepop, 500);
}
