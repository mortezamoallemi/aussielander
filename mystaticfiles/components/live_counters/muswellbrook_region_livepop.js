function muswellbrook_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4013;
var increase = Math.round(passed*2.21636315328403e-14*population);
document.getElementById("muswellbrook_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(muswellbrook_region_livepop, 500);
}
