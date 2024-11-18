function warilla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20422;
var increase = Math.round(passed*1.14058057250949e-13*population);
document.getElementById("warilla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warilla_livepop, 500);
}
