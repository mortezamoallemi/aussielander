function seville_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10273;
var increase = Math.round(passed*6.86532993516421e-13*population);
document.getElementById("seville_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seville_grove_livepop, 500);
}
