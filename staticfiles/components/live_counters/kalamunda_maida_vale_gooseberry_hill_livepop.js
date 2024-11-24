function kalamunda_maida_vale_gooseberry_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14891;
var increase = Math.round(passed*1.57387470979779e-13*population);
document.getElementById("kalamunda_maida_vale_gooseberry_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kalamunda_maida_vale_gooseberry_hill_livepop, 500);
}
