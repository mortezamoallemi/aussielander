function rowville_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10573;
var increase = Math.round(passed*-1.50554493774554e-13*population);
document.getElementById("rowville_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rowville_south_livepop, 500);
}
