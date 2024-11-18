function churchill_yamanto_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6766;
var increase = Math.round(passed*8.52476997261331e-13*population);
document.getElementById("churchill_yamanto_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(churchill_yamanto_livepop, 500);
}
