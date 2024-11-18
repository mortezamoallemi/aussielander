function hoppers_crossing_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19476;
var increase = Math.round(passed*2.85390497251011e-13*population);
document.getElementById("hoppers_crossing_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hoppers_crossing_south_livepop, 500);
}
