function broome_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13984;
var increase = Math.round(passed*5.78429529551829e-13*population);
document.getElementById("broome_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broome_livepop, 500);
}
