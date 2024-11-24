function kingswood_werrington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19577;
var increase = Math.round(passed*8.53471816427582e-13*population);
document.getElementById("kingswood_werrington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingswood_werrington_livepop, 500);
}
