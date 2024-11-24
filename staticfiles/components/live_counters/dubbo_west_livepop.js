function dubbo_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8769;
var increase = Math.round(passed*1.06023907654636e-12*population);
document.getElementById("dubbo_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dubbo_west_livepop, 500);
}
