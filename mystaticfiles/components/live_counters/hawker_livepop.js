function hawker_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2956;
var increase = Math.round(passed*1.74001542536499e-13*population);
document.getElementById("hawker_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hawker_livepop, 500);
}
