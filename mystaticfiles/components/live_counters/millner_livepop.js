function millner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2547;
var increase = Math.round(passed*2.023931915912e-13*population);
document.getElementById("millner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(millner_livepop, 500);
}
