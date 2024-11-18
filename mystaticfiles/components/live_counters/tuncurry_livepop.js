function tuncurry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6182;
var increase = Math.round(passed*4.05608541448637e-13*population);
document.getElementById("tuncurry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tuncurry_livepop, 500);
}
