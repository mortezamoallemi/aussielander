function tara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4222;
var increase = Math.round(passed*1.25917913873247e-13*population);
document.getElementById("tara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tara_livepop, 500);
}
