function south_melbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11548;
var increase = Math.round(passed*1.02345612899796e-12*population);
document.getElementById("south_melbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_melbourne_livepop, 500);
}
