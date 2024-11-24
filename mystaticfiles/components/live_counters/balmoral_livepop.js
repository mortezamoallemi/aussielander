function balmoral_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4227;
var increase = Math.round(passed*6.28805479413654e-13*population);
document.getElementById("balmoral_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balmoral_livepop, 500);
}
