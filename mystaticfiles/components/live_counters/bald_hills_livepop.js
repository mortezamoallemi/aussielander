function bald_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7274;
var increase = Math.round(passed*2.91707476243363e-13*population);
document.getElementById("bald_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bald_hills_livepop, 500);
}
