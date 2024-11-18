function chisholm_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5118;
var increase = Math.round(passed*-1.45770405630096e-13*population);
document.getElementById("chisholm_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chisholm_livepop, 500);
}
