function rockhampton_city_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3261;
var increase = Math.round(passed*-6.92067917286085e-13*population);
document.getElementById("rockhampton_city_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_city_livepop, 500);
}
