function kelmscott_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10479;
var increase = Math.round(passed*2.84057323922412e-13*population);
document.getElementById("kelmscott_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kelmscott_livepop, 500);
}
