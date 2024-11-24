function emerald_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13529;
var increase = Math.round(passed*1.47008758396503e-13*population);
document.getElementById("emerald_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(emerald_livepop, 500);
}
