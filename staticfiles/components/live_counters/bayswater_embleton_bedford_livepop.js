function bayswater_embleton_bedford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22955;
var increase = Math.round(passed*5.01414314590274e-13*population);
document.getElementById("bayswater_embleton_bedford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bayswater_embleton_bedford_livepop, 500);
}
