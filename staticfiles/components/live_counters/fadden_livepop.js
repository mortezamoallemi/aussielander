function fadden_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2953;
var increase = Math.round(passed*-2.71163965855774e-13*population);
document.getElementById("fadden_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fadden_livepop, 500);
}
