function enoggera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8160;
var increase = Math.round(passed*3.81176585931669e-13*population);
document.getElementById("enoggera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(enoggera_livepop, 500);
}
