function parap_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2745;
var increase = Math.round(passed*2.08464279322563e-12*population);
document.getElementById("parap_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parap_livepop, 500);
}
