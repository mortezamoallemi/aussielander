function wanniassa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7511;
var increase = Math.round(passed*-2.28862657857523e-13*population);
document.getElementById("wanniassa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wanniassa_livepop, 500);
}
