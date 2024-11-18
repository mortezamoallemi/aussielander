function bellbowrie_moggill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10103;
var increase = Math.round(passed*7.19805595269052e-13*population);
document.getElementById("bellbowrie_moggill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bellbowrie_moggill_livepop, 500);
}
