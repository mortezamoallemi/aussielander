function casino_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6972;
var increase = Math.round(passed*7.04313572584313e-14*population);
document.getElementById("casino_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(casino_region_livepop, 500);
}
