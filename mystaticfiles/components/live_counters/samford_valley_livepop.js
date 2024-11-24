function samford_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11757;
var increase = Math.round(passed*4.63146887310171e-13*population);
document.getElementById("samford_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(samford_valley_livepop, 500);
}
