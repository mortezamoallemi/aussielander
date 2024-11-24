function riverwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11277;
var increase = Math.round(passed*1.11691902959417e-12*population);
document.getElementById("riverwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverwood_livepop, 500);
}
