function cairnlea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9662;
var increase = Math.round(passed*5.63887553796694e-13*population);
document.getElementById("cairnlea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cairnlea_livepop, 500);
}