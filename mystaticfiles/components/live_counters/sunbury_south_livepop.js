function sunbury_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26653;
var increase = Math.round(passed*6.08380509751184e-13*population);
document.getElementById("sunbury_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunbury_south_livepop, 500);
}