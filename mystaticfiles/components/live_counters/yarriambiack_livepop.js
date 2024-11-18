function yarriambiack_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6623;
var increase = Math.round(passed*-3.75516442841313e-13*population);
document.getElementById("yarriambiack_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarriambiack_livepop, 500);
}
