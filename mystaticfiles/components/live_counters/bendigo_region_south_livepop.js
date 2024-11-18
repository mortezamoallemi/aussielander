function bendigo_region_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7180;
var increase = Math.round(passed*9.26592705135975e-13*population);
document.getElementById("bendigo_region_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bendigo_region_south_livepop, 500);
}
