function pimpama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9166;
var increase = Math.round(passed*6.65417331903227e-12*population);
document.getElementById("pimpama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pimpama_livepop, 500);
}
