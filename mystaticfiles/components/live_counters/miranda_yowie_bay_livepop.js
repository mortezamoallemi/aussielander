function miranda_yowie_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18230;
var increase = Math.round(passed*2.22684361229954e-13*population);
document.getElementById("miranda_yowie_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(miranda_yowie_bay_livepop, 500);
}
