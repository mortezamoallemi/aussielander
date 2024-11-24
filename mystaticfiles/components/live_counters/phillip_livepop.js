function phillip_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2935;
var increase = Math.round(passed*2.17160279927029e-12*population);
document.getElementById("phillip_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(phillip_livepop, 500);
}
