function inverell_region_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5987;
var increase = Math.round(passed*4.05700058470985e-13*population);
document.getElementById("inverell_region_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(inverell_region_west_livepop, 500);
}
