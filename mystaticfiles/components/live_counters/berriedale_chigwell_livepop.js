function berriedale_chigwell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5520;
var increase = Math.round(passed*2.11437663438323e-13*population);
document.getElementById("berriedale_chigwell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berriedale_chigwell_livepop, 500);
}
