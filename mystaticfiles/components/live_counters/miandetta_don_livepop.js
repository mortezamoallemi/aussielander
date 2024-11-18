function miandetta_don_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3495;
var increase = Math.round(passed*8.11951258417632e-13*population);
document.getElementById("miandetta_don_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(miandetta_don_livepop, 500);
}
