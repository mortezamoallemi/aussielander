function wentworth_falls_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6077;
var increase = Math.round(passed*1.49950057658465e-13*population);
document.getElementById("wentworth_falls_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wentworth_falls_livepop, 500);
}
