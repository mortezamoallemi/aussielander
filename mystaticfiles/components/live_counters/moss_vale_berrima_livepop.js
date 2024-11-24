function moss_vale_berrima_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9801;
var increase = Math.round(passed*5.86683616664456e-13*population);
document.getElementById("moss_vale_berrima_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moss_vale_berrima_livepop, 500);
}
