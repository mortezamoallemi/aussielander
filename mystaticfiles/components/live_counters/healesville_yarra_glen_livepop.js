function healesville_yarra_glen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13703;
var increase = Math.round(passed*4.11059558175705e-13*population);
document.getElementById("healesville_yarra_glen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(healesville_yarra_glen_livepop, 500);
}
