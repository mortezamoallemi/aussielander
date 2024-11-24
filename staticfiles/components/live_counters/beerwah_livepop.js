function beerwah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8201;
var increase = Math.round(passed*8.27326790952786e-13*population);
document.getElementById("beerwah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beerwah_livepop, 500);
}
