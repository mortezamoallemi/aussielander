function maryborough_region_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8390;
var increase = Math.round(passed*5.86412989214776e-13*population);
document.getElementById("maryborough_region_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryborough_region_south_livepop, 500);
}
