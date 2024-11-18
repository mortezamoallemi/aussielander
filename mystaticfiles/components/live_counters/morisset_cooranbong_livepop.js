function morisset_cooranbong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23676;
var increase = Math.round(passed*5.30817821473314e-13*population);
document.getElementById("morisset_cooranbong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morisset_cooranbong_livepop, 500);
}
