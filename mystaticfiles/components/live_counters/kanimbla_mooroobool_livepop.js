function kanimbla_mooroobool_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9885;
var increase = Math.round(passed*4.72704608586671e-13*population);
document.getElementById("kanimbla_mooroobool_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kanimbla_mooroobool_livepop, 500);
}
