function bega_eden_hinterland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8795;
var increase = Math.round(passed*2.02226381473425e-14*population);
document.getElementById("bega_eden_hinterland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bega_eden_hinterland_livepop, 500);
}
