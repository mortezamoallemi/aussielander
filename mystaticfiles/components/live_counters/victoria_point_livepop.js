function victoria_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15018;
var increase = Math.round(passed*8.58815561508665e-14*population);
document.getElementById("victoria_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victoria_point_livepop, 500);
}
