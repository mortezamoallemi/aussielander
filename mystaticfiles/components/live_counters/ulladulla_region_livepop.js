function ulladulla_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5063;
var increase = Math.round(passed*5.50570047789998e-13*population);
document.getElementById("ulladulla_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ulladulla_region_livepop, 500);
}
