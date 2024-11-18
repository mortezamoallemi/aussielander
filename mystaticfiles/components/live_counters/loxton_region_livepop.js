function loxton_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1700;
var increase = Math.round(passed*-1.21928967981346e-13*population);
document.getElementById("loxton_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(loxton_region_livepop, 500);
}
