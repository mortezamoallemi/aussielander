function camp_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11178;
var increase = Math.round(passed*3.76930333543262e-13*population);
document.getElementById("camp_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(camp_hill_livepop, 500);
}
