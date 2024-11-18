function morphett_vale_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9537;
var increase = Math.round(passed*2.6202313333038e-13*population);
document.getElementById("morphett_vale_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morphett_vale_west_livepop, 500);
}
