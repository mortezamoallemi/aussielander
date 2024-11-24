function gracemere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11668;
var increase = Math.round(passed*1.74023820555181e-12*population);
document.getElementById("gracemere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gracemere_livepop, 500);
}
