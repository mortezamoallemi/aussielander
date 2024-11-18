function moonta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4834;
var increase = Math.round(passed*8.35989412968475e-13*population);
document.getElementById("moonta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moonta_livepop, 500);
}
