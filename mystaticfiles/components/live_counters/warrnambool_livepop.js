function warrnambool_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 34019;
var increase = Math.round(passed*3.12958910628915e-13*population);
document.getElementById("warrnambool_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warrnambool_livepop, 500);
}
