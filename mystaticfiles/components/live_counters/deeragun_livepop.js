function deeragun_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22405;
var increase = Math.round(passed*2.45351930682476e-12*population);
document.getElementById("deeragun_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deeragun_livepop, 500);
}
