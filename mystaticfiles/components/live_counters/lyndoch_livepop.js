function lyndoch_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6153;
var increase = Math.round(passed*5.10634472157306e-13*population);
document.getElementById("lyndoch_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lyndoch_livepop, 500);
}
