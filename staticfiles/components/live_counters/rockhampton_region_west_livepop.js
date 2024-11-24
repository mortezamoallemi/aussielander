function rockhampton_region_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2917;
var increase = Math.round(passed*5.18507535671494e-13*population);
document.getElementById("rockhampton_region_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_region_west_livepop, 500);
}
