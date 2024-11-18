function beachmere_sandstone_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14892;
var increase = Math.round(passed*6.29415267749728e-13*population);
document.getElementById("beachmere_sandstone_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beachmere_sandstone_point_livepop, 500);
}
