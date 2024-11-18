function dunlop_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7199;
var increase = Math.round(passed*7.8001310158454e-14*population);
document.getElementById("dunlop_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dunlop_livepop, 500);
}
