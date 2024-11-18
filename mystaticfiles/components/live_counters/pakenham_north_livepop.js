function pakenham_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18604;
var increase = Math.round(passed*2.44772056357186e-12*population);
document.getElementById("pakenham_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pakenham_north_livepop, 500);
}
