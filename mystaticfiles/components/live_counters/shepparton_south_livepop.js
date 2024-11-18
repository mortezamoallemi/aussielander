function shepparton_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23137;
var increase = Math.round(passed*4.78365938522466e-13*population);
document.getElementById("shepparton_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shepparton_south_livepop, 500);
}
