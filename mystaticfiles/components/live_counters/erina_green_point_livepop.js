function erina_green_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13950;
var increase = Math.round(passed*1.65345632256243e-13*population);
document.getElementById("erina_green_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(erina_green_point_livepop, 500);
}
