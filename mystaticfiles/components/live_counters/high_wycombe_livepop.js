function high_wycombe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12307;
var increase = Math.round(passed*2.78094376037241e-13*population);
document.getElementById("high_wycombe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(high_wycombe_livepop, 500);
}
