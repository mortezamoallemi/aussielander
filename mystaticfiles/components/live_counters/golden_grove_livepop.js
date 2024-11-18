function golden_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10347;
var increase = Math.round(passed*5.8853707494576e-13*population);
document.getElementById("golden_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(golden_grove_livepop, 500);
}
