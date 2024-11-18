function greenfields_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9857;
var increase = Math.round(passed*-5.25402670127254e-14*population);
document.getElementById("greenfields_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenfields_livepop, 500);
}
