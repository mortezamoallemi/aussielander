function maitland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6601;
var increase = Math.round(passed*2.05768422419434e-12*population);
document.getElementById("maitland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maitland_livepop, 500);
}
