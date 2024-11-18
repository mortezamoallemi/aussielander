function banks_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4967;
var increase = Math.round(passed*-1.1764616421969e-13*population);
document.getElementById("banks_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(banks_livepop, 500);
}
