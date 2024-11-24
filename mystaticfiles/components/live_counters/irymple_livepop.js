function irymple_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6876;
var increase = Math.round(passed*3.78140961259928e-13*population);
document.getElementById("irymple_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(irymple_livepop, 500);
}
