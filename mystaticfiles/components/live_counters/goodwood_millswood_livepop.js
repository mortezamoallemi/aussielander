function goodwood_millswood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17582;
var increase = Math.round(passed*1.39309155311894e-13*population);
document.getElementById("goodwood_millswood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goodwood_millswood_livepop, 500);
}
