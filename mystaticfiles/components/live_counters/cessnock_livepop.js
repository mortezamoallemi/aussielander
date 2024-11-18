function cessnock_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21995;
var increase = Math.round(passed*5.20471487628091e-13*population);
document.getElementById("cessnock_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cessnock_livepop, 500);
}
