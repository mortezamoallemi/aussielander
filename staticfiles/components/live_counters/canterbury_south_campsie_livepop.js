function canterbury_south_campsie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 30620;
var increase = Math.round(passed*8.4105387782669e-13*population);
document.getElementById("canterbury_south_campsie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canterbury_south_campsie_livepop, 500);
}
