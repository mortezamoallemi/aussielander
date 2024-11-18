function subiaco_shenton_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16463;
var increase = Math.round(passed*5.65740913482712e-13*population);
document.getElementById("subiaco_shenton_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(subiaco_shenton_park_livepop, 500);
}
