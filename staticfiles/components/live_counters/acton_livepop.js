function acton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2086;
var increase = Math.round(passed*3.69295775929218e-13*population);
document.getElementById("acton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(acton_livepop, 500);
}