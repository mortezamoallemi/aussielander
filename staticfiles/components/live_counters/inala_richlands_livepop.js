function inala_richlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18007;
var increase = Math.round(passed*9.78673868492773e-13*population);
document.getElementById("inala_richlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(inala_richlands_livepop, 500);
}