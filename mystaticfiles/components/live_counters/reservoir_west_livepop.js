function reservoir_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24037;
var increase = Math.round(passed*2.95970364892991e-13*population);
document.getElementById("reservoir_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(reservoir_west_livepop, 500);
}
