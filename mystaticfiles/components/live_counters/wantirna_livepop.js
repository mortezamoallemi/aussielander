function wantirna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13923;
var increase = Math.round(passed*7.09987951414902e-14*population);
document.getElementById("wantirna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wantirna_livepop, 500);
}
