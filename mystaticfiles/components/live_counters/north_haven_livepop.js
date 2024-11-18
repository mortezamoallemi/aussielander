function north_haven_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14246;
var increase = Math.round(passed*8.42499797212615e-14*population);
document.getElementById("north_haven_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_haven_livepop, 500);
}
