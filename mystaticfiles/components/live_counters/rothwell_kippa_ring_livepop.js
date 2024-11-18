function rothwell_kippa_ring_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17139;
var increase = Math.round(passed*1.97303748056541e-13*population);
document.getElementById("rothwell_kippa_ring_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rothwell_kippa_ring_livepop, 500);
}
