function roselands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13739;
var increase = Math.round(passed*3.19981592068651e-13*population);
document.getElementById("roselands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roselands_livepop, 500);
}
