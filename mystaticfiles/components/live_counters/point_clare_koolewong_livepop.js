function point_clare_koolewong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6207;
var increase = Math.round(passed*-1.0839486748024e-13*population);
document.getElementById("point_clare_koolewong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(point_clare_koolewong_livepop, 500);
}
