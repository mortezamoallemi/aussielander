function parkwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8706;
var increase = Math.round(passed*1.98294834018004e-13*population);
document.getElementById("parkwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkwood_livepop, 500);
}