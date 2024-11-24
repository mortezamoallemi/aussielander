function rockingham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15434;
var increase = Math.round(passed*2.54886300107073e-13*population);
document.getElementById("rockingham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockingham_livepop, 500);
}
