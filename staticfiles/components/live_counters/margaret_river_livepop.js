function margaret_river_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8828;
var increase = Math.round(passed*1.18536534954057e-12*population);
document.getElementById("margaret_river_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(margaret_river_livepop, 500);
}
