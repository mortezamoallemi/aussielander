function grenfell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3650;
var increase = Math.round(passed*6.95390244754421e-15*population);
document.getElementById("grenfell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grenfell_livepop, 500);
}
