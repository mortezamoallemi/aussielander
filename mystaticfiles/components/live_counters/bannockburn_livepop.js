function bannockburn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6417;
var increase = Math.round(passed*1.95594821318137e-12*population);
document.getElementById("bannockburn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bannockburn_livepop, 500);
}