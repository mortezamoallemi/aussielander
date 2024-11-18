function darra_sumner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4933;
var increase = Math.round(passed*7.55498062102612e-13*population);
document.getElementById("darra_sumner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darra_sumner_livepop, 500);
}
