function batemans_bay_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8361;
var increase = Math.round(passed*1.0554877713827e-13*population);
document.getElementById("batemans_bay_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(batemans_bay_south_livepop, 500);
}
