function northcote_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24666;
var increase = Math.round(passed*4.65600490215992e-13*population);
document.getElementById("northcote_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northcote_livepop, 500);
}
