function swan_hill_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6375;
var increase = Math.round(passed*-1.70778000960342e-13*population);
document.getElementById("swan_hill_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(swan_hill_region_livepop, 500);
}
