function moorooka_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10423;
var increase = Math.round(passed*2.72901389714063e-13*population);
document.getElementById("moorooka_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moorooka_livepop, 500);
}
