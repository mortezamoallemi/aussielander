function mudgee_region_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10362;
var increase = Math.round(passed*2.57310484665747e-13*population);
document.getElementById("mudgee_region_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mudgee_region_west_livepop, 500);
}