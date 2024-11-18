function loganlea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10434;
var increase = Math.round(passed*7.21498056894463e-13*population);
document.getElementById("loganlea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(loganlea_livepop, 500);
}
