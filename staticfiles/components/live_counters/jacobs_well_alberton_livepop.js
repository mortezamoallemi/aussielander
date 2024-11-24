function jacobs_well_alberton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3640;
var increase = Math.round(passed*6.06544295327273e-13*population);
document.getElementById("jacobs_well_alberton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jacobs_well_alberton_livepop, 500);
}
