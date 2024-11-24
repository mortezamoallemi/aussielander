function red_cliffs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5878;
var increase = Math.round(passed*5.30867073455542e-13*population);
document.getElementById("red_cliffs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(red_cliffs_livepop, 500);
}
