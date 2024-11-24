function harrison_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7691;
var increase = Math.round(passed*3.48424935077869e-12*population);
document.getElementById("harrison_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(harrison_livepop, 500);
}
