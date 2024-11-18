function weddell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4521;
var increase = Math.round(passed*1.36243211875904e-12*population);
document.getElementById("weddell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(weddell_livepop, 500);
}
