function elderslie_harrington_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20980;
var increase = Math.round(passed*1.68889099977466e-12*population);
document.getElementById("elderslie_harrington_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elderslie_harrington_park_livepop, 500);
}
