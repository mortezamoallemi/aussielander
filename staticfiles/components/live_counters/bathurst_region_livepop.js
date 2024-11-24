function bathurst_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6913;
var increase = Math.round(passed*2.82328240768329e-13*population);
document.getElementById("bathurst_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bathurst_region_livepop, 500);
}
