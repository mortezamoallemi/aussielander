function armidale_region_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4490;
var increase = Math.round(passed*2.88977478527634e-13*population);
document.getElementById("armidale_region_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(armidale_region_north_livepop, 500);
}
