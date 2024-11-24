function rowville_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8004;
var increase = Math.round(passed*-6.15039950202621e-14*population);
document.getElementById("rowville_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rowville_north_livepop, 500);
}
