function st_lucia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12575;
var increase = Math.round(passed*7.37777749344465e-13*population);
document.getElementById("st_lucia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_lucia_livepop, 500);
}
