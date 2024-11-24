function singleton_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4922;
var increase = Math.round(passed*2.13580605212397e-13*population);
document.getElementById("singleton_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(singleton_region_livepop, 500);
}
