function sorell_richmond_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8554;
var increase = Math.round(passed*6.08828980071105e-13*population);
document.getElementById("sorell_richmond_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sorell_richmond_livepop, 500);
}
