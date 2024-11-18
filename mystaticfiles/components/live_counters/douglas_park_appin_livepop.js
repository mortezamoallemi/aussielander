function douglas_park_appin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9625;
var increase = Math.round(passed*1.96369598343261e-12*population);
document.getElementById("douglas_park_appin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(douglas_park_appin_livepop, 500);
}
