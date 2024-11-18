function leumeah_minto_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16541;
var increase = Math.round(passed*2.17633751100759e-13*population);
document.getElementById("leumeah_minto_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leumeah_minto_heights_livepop, 500);
}
