function aranda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2397;
var increase = Math.round(passed*-2.23551186414144e-13*population);
document.getElementById("aranda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aranda_livepop, 500);
}
