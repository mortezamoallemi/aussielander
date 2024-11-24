function darwin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 123577;
var increase = Math.round(passed*9.57659535629584e-13*population);
document.getElementById("darwin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darwin_livepop, 500);
}
