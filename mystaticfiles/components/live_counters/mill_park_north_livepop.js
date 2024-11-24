function mill_park_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17819;
var increase = Math.round(passed*-1.46008875047142e-13*population);
document.getElementById("mill_park_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mill_park_north_livepop, 500);
}
