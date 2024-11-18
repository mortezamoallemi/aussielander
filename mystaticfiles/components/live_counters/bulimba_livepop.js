function bulimba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6698;
var increase = Math.round(passed*7.59533214939098e-13*population);
document.getElementById("bulimba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bulimba_livepop, 500);
}
