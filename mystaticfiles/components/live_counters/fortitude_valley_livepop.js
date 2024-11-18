function fortitude_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7142;
var increase = Math.round(passed*1.99303668536216e-12*population);
document.getElementById("fortitude_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fortitude_valley_livepop, 500);
}
