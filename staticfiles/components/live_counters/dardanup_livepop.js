function dardanup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3143;
var increase = Math.round(passed*3.2923056490307e-13*population);
document.getElementById("dardanup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dardanup_livepop, 500);
}
