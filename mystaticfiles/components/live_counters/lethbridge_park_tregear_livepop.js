function lethbridge_park_tregear_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20705;
var increase = Math.round(passed*1.61705950301694e-12*population);
document.getElementById("lethbridge_park_tregear_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lethbridge_park_tregear_livepop, 500);
}
