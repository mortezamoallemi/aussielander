function bundaberg_region_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9837;
var increase = Math.round(passed*2.97638059096873e-13*population);
document.getElementById("bundaberg_region_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundaberg_region_south_livepop, 500);
}
