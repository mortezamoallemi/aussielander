function mcdowall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7539;
var increase = Math.round(passed*3.92106972358231e-13*population);
document.getElementById("mcdowall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mcdowall_livepop, 500);
}
