function little_grove_elleker_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3630;
var increase = Math.round(passed*6.52681248031102e-13*population);
document.getElementById("little_grove_elleker_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(little_grove_elleker_livepop, 500);
}
