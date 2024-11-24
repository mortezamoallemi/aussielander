function annerley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11388;
var increase = Math.round(passed*4.15986919663097e-13*population);
document.getElementById("annerley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(annerley_livepop, 500);
}
