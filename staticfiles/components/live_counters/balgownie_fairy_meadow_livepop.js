function balgownie_fairy_meadow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21201;
var increase = Math.round(passed*3.70472360623854e-13*population);
document.getElementById("balgownie_fairy_meadow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balgownie_fairy_meadow_livepop, 500);
}
