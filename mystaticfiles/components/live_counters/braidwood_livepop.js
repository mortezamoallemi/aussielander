function braidwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3875;
var increase = Math.round(passed*9.1194745180334e-13*population);
document.getElementById("braidwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(braidwood_livepop, 500);
}
