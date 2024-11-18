function meadow_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14841;
var increase = Math.round(passed*-8.54596200828722e-16*population);
document.getElementById("meadow_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(meadow_heights_livepop, 500);
}
