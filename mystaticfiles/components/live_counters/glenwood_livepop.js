function glenwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16128;
var increase = Math.round(passed*3.24306602299312e-13*population);
document.getElementById("glenwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenwood_livepop, 500);
}
