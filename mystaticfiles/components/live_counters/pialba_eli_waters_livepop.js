function pialba_eli_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13950;
var increase = Math.round(passed*6.47011782706803e-13*population);
document.getElementById("pialba_eli_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pialba_eli_waters_livepop, 500);
}
