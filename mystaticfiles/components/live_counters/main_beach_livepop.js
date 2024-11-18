function main_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3883;
var increase = Math.round(passed*6.67647609486026e-13*population);
document.getElementById("main_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(main_beach_livepop, 500);
}
