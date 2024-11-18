function yagoona_birrong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20706;
var increase = Math.round(passed*5.61017776507853e-13*population);
document.getElementById("yagoona_birrong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yagoona_birrong_livepop, 500);
}
