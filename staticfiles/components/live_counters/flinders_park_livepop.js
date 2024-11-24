function flinders_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14465;
var increase = Math.round(passed*3.62212595880523e-13*population);
document.getElementById("flinders_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flinders_park_livepop, 500);
}
