function hamilton_broadmeadow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11847;
var increase = Math.round(passed*5.80799028173327e-14*population);
document.getElementById("hamilton_broadmeadow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hamilton_broadmeadow_livepop, 500);
}
