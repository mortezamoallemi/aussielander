function weetangera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2575;
var increase = Math.round(passed*-8.07591955143776e-14*population);
document.getElementById("weetangera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(weetangera_livepop, 500);
}
