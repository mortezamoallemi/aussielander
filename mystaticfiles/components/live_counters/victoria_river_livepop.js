function victoria_river_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2489;
var increase = Math.round(passed*-7.09455401301617e-14*population);
document.getElementById("victoria_river_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victoria_river_livepop, 500);
}
