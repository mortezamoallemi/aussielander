function rockhampton_region_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3455;
var increase = Math.round(passed*6.32600068137551e-13*population);
document.getElementById("rockhampton_region_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_region_east_livepop, 500);
}
