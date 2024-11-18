function victoria_park_lathlain_burswood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14481;
var increase = Math.round(passed*3.93408350349384e-13*population);
document.getElementById("victoria_park_lathlain_burswood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victoria_park_lathlain_burswood_livepop, 500);
}
