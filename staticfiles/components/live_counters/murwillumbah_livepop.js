function murwillumbah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8942;
var increase = Math.round(passed*5.19281459147234e-13*population);
document.getElementById("murwillumbah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murwillumbah_livepop, 500);
}
