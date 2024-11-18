function dianella_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24129;
var increase = Math.round(passed*2.725516364586e-13*population);
document.getElementById("dianella_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dianella_livepop, 500);
}
