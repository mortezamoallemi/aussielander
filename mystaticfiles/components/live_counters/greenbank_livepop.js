function greenbank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12845;
var increase = Math.round(passed*5.48905709908716e-13*population);
document.getElementById("greenbank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenbank_livepop, 500);
}
