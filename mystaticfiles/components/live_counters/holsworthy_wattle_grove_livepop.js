function holsworthy_wattle_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20706;
var increase = Math.round(passed*3.64658670192409e-13*population);
document.getElementById("holsworthy_wattle_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(holsworthy_wattle_grove_livepop, 500);
}
