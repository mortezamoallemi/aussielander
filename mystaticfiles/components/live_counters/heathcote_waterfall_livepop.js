function heathcote_waterfall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6504;
var increase = Math.round(passed*4.59954249186929e-14*population);
document.getElementById("heathcote_waterfall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heathcote_waterfall_livepop, 500);
}
