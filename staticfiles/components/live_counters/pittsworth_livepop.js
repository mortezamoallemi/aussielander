function pittsworth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5718;
var increase = Math.round(passed*4.91012478738018e-13*population);
document.getElementById("pittsworth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pittsworth_livepop, 500);
}
