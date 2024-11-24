function chermside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9319;
var increase = Math.round(passed*8.3373938610444e-13*population);
document.getElementById("chermside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chermside_livepop, 500);
}
