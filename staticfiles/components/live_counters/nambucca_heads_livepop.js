function nambucca_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6752;
var increase = Math.round(passed*8.31992163185851e-14*population);
document.getElementById("nambucca_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nambucca_heads_livepop, 500);
}
