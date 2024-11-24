function canning_vale_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9997;
var increase = Math.round(passed*-1.02570992930569e-13*population);
document.getElementById("canning_vale_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canning_vale_west_livepop, 500);
}
