function burwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12247;
var increase = Math.round(passed*8.0151720697578e-13*population);
document.getElementById("burwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burwood_livepop, 500);
}
