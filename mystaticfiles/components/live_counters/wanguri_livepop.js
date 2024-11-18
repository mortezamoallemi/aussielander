function wanguri_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1876;
var increase = Math.round(passed*3.4383118601927e-13*population);
document.getElementById("wanguri_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wanguri_livepop, 500);
}
