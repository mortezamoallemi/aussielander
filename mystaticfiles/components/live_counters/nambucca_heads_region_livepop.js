function nambucca_heads_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7665;
var increase = Math.round(passed*2.7909120198397e-13*population);
document.getElementById("nambucca_heads_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nambucca_heads_region_livepop, 500);
}
