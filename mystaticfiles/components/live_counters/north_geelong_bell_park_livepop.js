function north_geelong_bell_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14629;
var increase = Math.round(passed*2.80531998290889e-13*population);
document.getElementById("north_geelong_bell_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_geelong_bell_park_livepop, 500);
}
