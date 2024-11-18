function cooma_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3282;
var increase = Math.round(passed*2.102064962154e-13*population);
document.getElementById("cooma_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cooma_region_livepop, 500);
}
