function walcha_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3226;
var increase = Math.round(passed*6.71949525333256e-14*population);
document.getElementById("walcha_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(walcha_livepop, 500);
}
