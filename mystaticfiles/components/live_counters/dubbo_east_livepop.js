function dubbo_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10379;
var increase = Math.round(passed*-2.80875037145876e-13*population);
document.getElementById("dubbo_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dubbo_east_livepop, 500);
}
