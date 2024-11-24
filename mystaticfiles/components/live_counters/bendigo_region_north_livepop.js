function bendigo_region_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4365;
var increase = Math.round(passed*3.00496074827037e-13*population);
document.getElementById("bendigo_region_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bendigo_region_north_livepop, 500);
}
