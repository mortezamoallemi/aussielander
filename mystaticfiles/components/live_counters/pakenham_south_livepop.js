function pakenham_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28541;
var increase = Math.round(passed*1.84160065642791e-12*population);
document.getElementById("pakenham_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pakenham_south_livepop, 500);
}
