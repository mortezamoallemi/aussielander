function tiwi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2561;
var increase = Math.round(passed*1.27568836083813e-13*population);
document.getElementById("tiwi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tiwi_livepop, 500);
}
