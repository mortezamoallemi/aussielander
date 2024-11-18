function alawa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2130;
var increase = Math.round(passed*1.78898804010735e-14*population);
document.getElementById("alawa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alawa_livepop, 500);
}
