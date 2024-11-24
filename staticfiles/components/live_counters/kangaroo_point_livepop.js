function kangaroo_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8213;
var increase = Math.round(passed*1.01440248002697e-12*population);
document.getElementById("kangaroo_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kangaroo_point_livepop, 500);
}
