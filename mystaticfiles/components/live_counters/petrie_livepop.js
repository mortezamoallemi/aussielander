function petrie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8689;
var increase = Math.round(passed*1.39470410710288e-13*population);
document.getElementById("petrie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(petrie_livepop, 500);
}
