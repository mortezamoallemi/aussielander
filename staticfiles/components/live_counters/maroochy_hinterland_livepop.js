function maroochy_hinterland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6255;
var increase = Math.round(passed*3.36248856184607e-13*population);
document.getElementById("maroochy_hinterland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maroochy_hinterland_livepop, 500);
}
