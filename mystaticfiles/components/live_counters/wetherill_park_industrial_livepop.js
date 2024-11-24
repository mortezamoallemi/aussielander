function wetherill_park_industrial_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 36;
var increase = Math.round(passed*3.4182933836421e-12*population);
document.getElementById("wetherill_park_industrial_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wetherill_park_industrial_livepop, 500);
}
