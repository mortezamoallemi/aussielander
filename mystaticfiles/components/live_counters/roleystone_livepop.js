function roleystone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7033;
var increase = Math.round(passed*2.37024293252896e-13*population);
document.getElementById("roleystone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roleystone_livepop, 500);
}
