function ayr_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9097;
var increase = Math.round(passed*-3.8227713074057e-14*population);
document.getElementById("ayr_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ayr_livepop, 500);
}
