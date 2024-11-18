function padstow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16475;
var increase = Math.round(passed*3.33510644820122e-13*population);
document.getElementById("padstow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(padstow_livepop, 500);
}
