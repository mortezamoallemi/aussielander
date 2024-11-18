function tewantin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10306;
var increase = Math.round(passed*1.63310556891767e-13*population);
document.getElementById("tewantin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tewantin_livepop, 500);
}
