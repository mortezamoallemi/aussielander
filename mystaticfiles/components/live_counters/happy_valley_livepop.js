function happy_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13614;
var increase = Math.round(passed*-9.3099817023965e-15*population);
document.getElementById("happy_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(happy_valley_livepop, 500);
}