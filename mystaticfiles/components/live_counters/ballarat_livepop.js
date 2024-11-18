function ballarat_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 99881;
var increase = Math.round(passed*5.35053144022229e-13*population);
document.getElementById("ballarat_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballarat_livepop, 500);
}
