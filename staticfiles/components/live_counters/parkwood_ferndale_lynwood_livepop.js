function parkwood_ferndale_lynwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13806;
var increase = Math.round(passed*1.25256706097262e-13*population);
document.getElementById("parkwood_ferndale_lynwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkwood_ferndale_lynwood_livepop, 500);
}
