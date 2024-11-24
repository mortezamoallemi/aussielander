function herberton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5639;
var increase = Math.round(passed*1.76762957413604e-13*population);
document.getElementById("herberton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(herberton_livepop, 500);
}
