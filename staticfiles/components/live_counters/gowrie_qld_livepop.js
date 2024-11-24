function gowrie_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6413;
var increase = Math.round(passed*8.92647191324502e-13*population);
document.getElementById("gowrie_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gowrie_qld_livepop, 500);
}
