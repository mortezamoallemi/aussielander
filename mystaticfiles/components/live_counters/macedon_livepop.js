function macedon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3382;
var increase = Math.round(passed*3.80612388712975e-13*population);
document.getElementById("macedon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macedon_livepop, 500);
}
