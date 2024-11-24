function paddington_moore_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15171;
var increase = Math.round(passed*4.02086707046538e-13*population);
document.getElementById("paddington_moore_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paddington_moore_park_livepop, 500);
}
