function bardon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9717;
var increase = Math.round(passed*3.08935710501275e-13*population);
document.getElementById("bardon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bardon_livepop, 500);
}
