function ararat_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3142;
var increase = Math.round(passed*4.86469169520727e-13*population);
document.getElementById("ararat_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ararat_region_livepop, 500);
}
