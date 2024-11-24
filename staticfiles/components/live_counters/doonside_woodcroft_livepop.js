function doonside_woodcroft_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22526;
var increase = Math.round(passed*9.13237916456653e-13*population);
document.getElementById("doonside_woodcroft_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(doonside_woodcroft_livepop, 500);
}
