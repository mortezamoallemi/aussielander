function wyndham_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23274;
var increase = Math.round(passed*1.87901823630986e-12*population);
document.getElementById("wyndham_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wyndham_vale_livepop, 500);
}
