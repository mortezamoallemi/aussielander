function burnie_ulverstone_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4974;
var increase = Math.round(passed*-1.68592039504566e-13*population);
document.getElementById("burnie_ulverstone_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burnie_ulverstone_region_livepop, 500);
}
