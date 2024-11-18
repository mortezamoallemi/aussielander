function kingsgrove_north_earlwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23679;
var increase = Math.round(passed*3.17706558343108e-13*population);
document.getElementById("kingsgrove_north_earlwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingsgrove_north_earlwood_livepop, 500);
}
