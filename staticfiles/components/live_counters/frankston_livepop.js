function frankston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22568;
var increase = Math.round(passed*2.83316462190217e-13*population);
document.getElementById("frankston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(frankston_livepop, 500);
}
