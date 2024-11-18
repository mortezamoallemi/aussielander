function rockingham_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13;
var increase = Math.round(passed*0*population);
document.getElementById("rockingham_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockingham_lakes_livepop, 500);
}
