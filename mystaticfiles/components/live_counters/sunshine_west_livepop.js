function sunshine_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18589;
var increase = Math.round(passed*6.62167580814097e-13*population);
document.getElementById("sunshine_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunshine_west_livepop, 500);
}
