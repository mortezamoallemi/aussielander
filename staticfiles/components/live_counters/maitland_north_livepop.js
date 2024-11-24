function maitland_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7611;
var increase = Math.round(passed*8.88531275772859e-13*population);
document.getElementById("maitland_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maitland_north_livepop, 500);
}
