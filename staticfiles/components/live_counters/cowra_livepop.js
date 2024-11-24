function cowra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9144;
var increase = Math.round(passed*1.53028667462147e-13*population);
document.getElementById("cowra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cowra_livepop, 500);
}
