function margate_snug_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7710;
var increase = Math.round(passed*5.3613847306313e-13*population);
document.getElementById("margate_snug_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(margate_snug_livepop, 500);
}
