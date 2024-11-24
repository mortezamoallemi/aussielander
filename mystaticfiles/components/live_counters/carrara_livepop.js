function carrara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12191;
var increase = Math.round(passed*3.32669388423391e-13*population);
document.getElementById("carrara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carrara_livepop, 500);
}
