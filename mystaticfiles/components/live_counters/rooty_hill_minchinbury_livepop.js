function rooty_hill_minchinbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21152;
var increase = Math.round(passed*4.74557929764928e-13*population);
document.getElementById("rooty_hill_minchinbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rooty_hill_minchinbury_livepop, 500);
}
