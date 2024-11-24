function romsey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9359;
var increase = Math.round(passed*5.19440608859285e-13*population);
document.getElementById("romsey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(romsey_livepop, 500);
}
