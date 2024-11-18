function burnside_wattle_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18517;
var increase = Math.round(passed*1.93697147270582e-13*population);
document.getElementById("burnside_wattle_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burnside_wattle_park_livepop, 500);
}
