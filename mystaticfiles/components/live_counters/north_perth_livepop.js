function north_perth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8825;
var increase = Math.round(passed*2.05221465002038e-13*population);
document.getElementById("north_perth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_perth_livepop, 500);
}
