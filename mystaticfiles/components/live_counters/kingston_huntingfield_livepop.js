function kingston_huntingfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11304;
var increase = Math.round(passed*3.16919456962438e-13*population);
document.getElementById("kingston_huntingfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingston_huntingfield_livepop, 500);
}
