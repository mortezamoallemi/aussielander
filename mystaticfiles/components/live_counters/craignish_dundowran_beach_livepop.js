function craignish_dundowran_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4815;
var increase = Math.round(passed*4.46022812212669e-13*population);
document.getElementById("craignish_dundowran_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(craignish_dundowran_beach_livepop, 500);
}
