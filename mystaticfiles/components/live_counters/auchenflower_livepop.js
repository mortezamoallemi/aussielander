function auchenflower_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5498;
var increase = Math.round(passed*1.70687892675842e-13*population);
document.getElementById("auchenflower_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(auchenflower_livepop, 500);
}
