function armidale_region_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6023;
var increase = Math.round(passed*2.42643634800168e-14*population);
document.getElementById("armidale_region_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(armidale_region_south_livepop, 500);
}
