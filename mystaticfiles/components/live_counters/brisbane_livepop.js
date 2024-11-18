function brisbane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2192715;
var increase = Math.round(passed*6.55759338379667e-13*population);
document.getElementById("brisbane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brisbane_livepop, 500);
}
