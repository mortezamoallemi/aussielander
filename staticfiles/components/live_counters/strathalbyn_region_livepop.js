function strathalbyn_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7364;
var increase = Math.round(passed*6.57292704425476e-13*population);
document.getElementById("strathalbyn_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(strathalbyn_region_livepop, 500);
}
