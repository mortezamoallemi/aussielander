function niddrie_essendon_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6921;
var increase = Math.round(passed*6.29518623904033e-13*population);
document.getElementById("niddrie_essendon_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(niddrie_essendon_west_livepop, 500);
}
