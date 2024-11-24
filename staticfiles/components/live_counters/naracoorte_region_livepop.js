function naracoorte_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2249;
var increase = Math.round(passed*-4.69989676266628e-13*population);
document.getElementById("naracoorte_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(naracoorte_region_livepop, 500);
}
