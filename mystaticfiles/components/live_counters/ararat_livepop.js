function ararat_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8301;
var increase = Math.round(passed*1.72702133001506e-13*population);
document.getElementById("ararat_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ararat_livepop, 500);
}
