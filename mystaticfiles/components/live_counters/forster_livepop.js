function forster_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14270;
var increase = Math.round(passed*2.58983980336711e-13*population);
document.getElementById("forster_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forster_livepop, 500);
}
