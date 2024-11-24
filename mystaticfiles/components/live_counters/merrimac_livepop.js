function merrimac_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7070;
var increase = Math.round(passed*7.11195279995658e-13*population);
document.getElementById("merrimac_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(merrimac_livepop, 500);
}
