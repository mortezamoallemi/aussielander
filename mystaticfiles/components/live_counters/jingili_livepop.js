function jingili_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1756;
var increase = Math.round(passed*-2.23543913768774e-13*population);
document.getElementById("jingili_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jingili_livepop, 500);
}
