function forster_tuncurry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20455;
var increase = Math.round(passed*3.0290211234943e-13*population);
document.getElementById("forster_tuncurry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forster_tuncurry_livepop, 500);
}
