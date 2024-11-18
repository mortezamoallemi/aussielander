function ballina_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16835;
var increase = Math.round(passed*4.45088653651423e-13*population);
document.getElementById("ballina_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballina_region_livepop, 500);
}
