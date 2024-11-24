function atherton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10713;
var increase = Math.round(passed*3.31752765013934e-13*population);
document.getElementById("atherton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(atherton_livepop, 500);
}
