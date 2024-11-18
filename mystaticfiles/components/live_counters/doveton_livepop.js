function doveton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11305;
var increase = Math.round(passed*6.17593896192408e-13*population);
document.getElementById("doveton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(doveton_livepop, 500);
}
