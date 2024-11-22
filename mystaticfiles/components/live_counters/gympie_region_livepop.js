function gympie_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18567;
var increase = Math.round(passed*6.02984607624794e-13*population);
document.getElementById("gympie_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gympie_region_livepop, 500);
}