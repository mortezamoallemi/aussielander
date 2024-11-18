function narooma_bermagui_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8979;
var increase = Math.round(passed*2.49951100855138e-13*population);
document.getElementById("narooma_bermagui_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narooma_bermagui_livepop, 500);
}
