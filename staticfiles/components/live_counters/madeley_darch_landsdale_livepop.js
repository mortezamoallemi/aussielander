function madeley_darch_landsdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25405;
var increase = Math.round(passed*1.84973104702009e-12*population);
document.getElementById("madeley_darch_landsdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(madeley_darch_landsdale_livepop, 500);
}
