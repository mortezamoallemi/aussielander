function rivett_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3190;
var increase = Math.round(passed*1.38682480391368e-13*population);
document.getElementById("rivett_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rivett_livepop, 500);
}
