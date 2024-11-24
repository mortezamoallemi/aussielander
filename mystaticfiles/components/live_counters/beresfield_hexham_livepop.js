function beresfield_hexham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8358;
var increase = Math.round(passed*-2.27595853752688e-15*population);
document.getElementById("beresfield_hexham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beresfield_hexham_livepop, 500);
}
