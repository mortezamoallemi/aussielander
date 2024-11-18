function lake_munmorah_mannering_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10730;
var increase = Math.round(passed*4.07015637312348e-13*population);
document.getElementById("lake_munmorah_mannering_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lake_munmorah_mannering_park_livepop, 500);
}
