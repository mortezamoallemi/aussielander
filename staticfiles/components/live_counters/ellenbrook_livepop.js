function ellenbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 36119;
var increase = Math.round(passed*2.7532074851914e-12*population);
document.getElementById("ellenbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ellenbrook_livepop, 500);
}
