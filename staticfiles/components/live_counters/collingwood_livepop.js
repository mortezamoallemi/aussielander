function collingwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8512;
var increase = Math.round(passed*1.74058470026281e-12*population);
document.getElementById("collingwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(collingwood_livepop, 500);
}
