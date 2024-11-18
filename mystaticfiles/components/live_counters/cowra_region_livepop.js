function cowra_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5449;
var increase = Math.round(passed*1.19840497427491e-13*population);
document.getElementById("cowra_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cowra_region_livepop, 500);
}
