function lithgow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12814;
var increase = Math.round(passed*2.84948991024838e-13*population);
document.getElementById("lithgow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lithgow_livepop, 500);
}
