function thamarrurr_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2475;
var increase = Math.round(passed*4.51291981050493e-13*population);
document.getElementById("thamarrurr_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thamarrurr_livepop, 500);
}
