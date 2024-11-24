function blue_mountains_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12;
var increase = Math.round(passed*-5.81107770087617e-12*population);
document.getElementById("blue_mountains_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blue_mountains_north_livepop, 500);
}
