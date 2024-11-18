function horsham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16252;
var increase = Math.round(passed*1.41262675085569e-13*population);
document.getElementById("horsham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(horsham_livepop, 500);
}
