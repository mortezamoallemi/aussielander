function east_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11;
var increase = Math.round(passed*-8.49679316010273e-12*population);
document.getElementById("east_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_point_livepop, 500);
}
