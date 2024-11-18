function moama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5845;
var increase = Math.round(passed*8.43596303279281e-13*population);
document.getElementById("moama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moama_livepop, 500);
}
