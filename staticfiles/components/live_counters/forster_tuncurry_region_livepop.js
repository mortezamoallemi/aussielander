function forster_tuncurry_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6085;
var increase = Math.round(passed*5.07540670276476e-13*population);
document.getElementById("forster_tuncurry_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forster_tuncurry_region_livepop, 500);
}
