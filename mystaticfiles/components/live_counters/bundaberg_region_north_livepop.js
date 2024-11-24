function bundaberg_region_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8866;
var increase = Math.round(passed*6.39960364417462e-13*population);
document.getElementById("bundaberg_region_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundaberg_region_north_livepop, 500);
}
