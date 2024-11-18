function wulguru_roseneath_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6098;
var increase = Math.round(passed*2.29215108608355e-14*population);
document.getElementById("wulguru_roseneath_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wulguru_roseneath_livepop, 500);
}
