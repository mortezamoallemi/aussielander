function clontarf_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8252;
var increase = Math.round(passed*2.67639517819293e-13*population);
document.getElementById("clontarf_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clontarf_livepop, 500);
}
