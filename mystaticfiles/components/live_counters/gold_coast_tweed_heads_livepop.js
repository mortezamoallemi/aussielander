function gold_coast_tweed_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 624263;
var increase = Math.round(passed*7.13660871212098e-13*population);
document.getElementById("gold_coast_tweed_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gold_coast_tweed_heads_livepop, 500);
}
