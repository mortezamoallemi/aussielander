function yuendumu_anmatjere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2083;
var increase = Math.round(passed*7.04159023170046e-14*population);
document.getElementById("yuendumu_anmatjere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yuendumu_anmatjere_livepop, 500);
}
