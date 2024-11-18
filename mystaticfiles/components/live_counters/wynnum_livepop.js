function wynnum_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13230;
var increase = Math.round(passed*3.46781418211842e-13*population);
document.getElementById("wynnum_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wynnum_livepop, 500);
}
