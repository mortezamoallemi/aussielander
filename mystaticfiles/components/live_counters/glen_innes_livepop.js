function glen_innes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8832;
var increase = Math.round(passed*1.28388514120795e-13*population);
document.getElementById("glen_innes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glen_innes_livepop, 500);
}
