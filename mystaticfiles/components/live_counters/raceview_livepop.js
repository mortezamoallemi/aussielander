function raceview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15174;
var increase = Math.round(passed*4.1359301156477e-13*population);
document.getElementById("raceview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(raceview_livepop, 500);
}
