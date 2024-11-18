function lismore_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15028;
var increase = Math.round(passed*1.10253286831235e-13*population);
document.getElementById("lismore_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lismore_region_livepop, 500);
}
