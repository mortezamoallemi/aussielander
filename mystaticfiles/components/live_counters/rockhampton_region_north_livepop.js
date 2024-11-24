function rockhampton_region_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4243;
var increase = Math.round(passed*3.37662818699497e-13*population);
document.getElementById("rockhampton_region_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_region_north_livepop, 500);
}
