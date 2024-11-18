function wooloowin_lutwyche_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9746;
var increase = Math.round(passed*6.9238720124347e-13*population);
document.getElementById("wooloowin_lutwyche_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wooloowin_lutwyche_livepop, 500);
}
