function weipa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3903;
var increase = Math.round(passed*1.00312508811442e-12*population);
document.getElementById("weipa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(weipa_livepop, 500);
}
