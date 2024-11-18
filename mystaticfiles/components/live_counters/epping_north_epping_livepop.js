function epping_north_epping_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27093;
var increase = Math.round(passed*8.79404332829442e-13*population);
document.getElementById("epping_north_epping_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(epping_north_epping_livepop, 500);
}
