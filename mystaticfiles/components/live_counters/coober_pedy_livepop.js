function coober_pedy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1766;
var increase = Math.round(passed*2.63980885032379e-13*population);
document.getElementById("coober_pedy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coober_pedy_livepop, 500);
}
