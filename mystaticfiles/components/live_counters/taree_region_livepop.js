function taree_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12444;
var increase = Math.round(passed*4.92610938494246e-13*population);
document.getElementById("taree_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taree_region_livepop, 500);
}
