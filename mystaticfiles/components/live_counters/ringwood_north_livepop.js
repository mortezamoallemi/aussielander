function ringwood_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9521;
var increase = Math.round(passed*1.38042448512556e-13*population);
document.getElementById("ringwood_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ringwood_north_livepop, 500);
}
