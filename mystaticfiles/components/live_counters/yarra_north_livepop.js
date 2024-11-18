function yarra_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9041;
var increase = Math.round(passed*6.70452690703935e-13*population);
document.getElementById("yarra_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarra_north_livepop, 500);
}
