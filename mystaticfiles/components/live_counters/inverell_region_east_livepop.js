function inverell_region_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5235;
var increase = Math.round(passed*-5.78847910938522e-14*population);
document.getElementById("inverell_region_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(inverell_region_east_livepop, 500);
}
