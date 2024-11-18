function homebush_bay_silverwater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18733;
var increase = Math.round(passed*3.20126987980453e-12*population);
document.getElementById("homebush_bay_silverwater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(homebush_bay_silverwater_livepop, 500);
}
