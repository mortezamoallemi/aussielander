function currambine_kinross_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13799;
var increase = Math.round(passed*-6.72032155593709e-14*population);
document.getElementById("currambine_kinross_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(currambine_kinross_livepop, 500);
}
