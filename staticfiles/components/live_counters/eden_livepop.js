function eden_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3218;
var increase = Math.round(passed*2.17156764280415e-14*population);
document.getElementById("eden_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eden_livepop, 500);
}
