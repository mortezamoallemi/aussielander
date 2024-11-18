function nairne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5045;
var increase = Math.round(passed*8.45952687402645e-13*population);
document.getElementById("nairne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nairne_livepop, 500);
}
