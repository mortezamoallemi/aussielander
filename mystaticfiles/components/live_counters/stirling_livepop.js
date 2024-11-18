function stirling_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2134;
var increase = Math.round(passed*1.47319239147621e-13*population);
document.getElementById("stirling_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stirling_livepop, 500);
}
