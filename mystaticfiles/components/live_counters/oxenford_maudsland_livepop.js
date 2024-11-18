function oxenford_maudsland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15790;
var increase = Math.round(passed*5.97187602583973e-13*population);
document.getElementById("oxenford_maudsland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oxenford_maudsland_livepop, 500);
}
