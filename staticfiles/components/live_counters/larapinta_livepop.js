function larapinta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4887;
var increase = Math.round(passed*-1.98022643821095e-13*population);
document.getElementById("larapinta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(larapinta_livepop, 500);
}
