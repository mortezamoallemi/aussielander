function moree_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5451;
var increase = Math.round(passed*-1.11862153541612e-13*population);
document.getElementById("moree_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moree_region_livepop, 500);
}
