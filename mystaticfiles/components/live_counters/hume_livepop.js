function hume_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 424;
var increase = Math.round(passed*2.0065460320536e-12*population);
document.getElementById("hume_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hume_livepop, 500);
}
