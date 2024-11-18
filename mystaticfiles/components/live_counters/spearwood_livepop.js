function spearwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10106;
var increase = Math.round(passed*6.67773658177841e-13*population);
document.getElementById("spearwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(spearwood_livepop, 500);
}
