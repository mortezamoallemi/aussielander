function unley_parkside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20136;
var increase = Math.round(passed*1.58174498393549e-13*population);
document.getElementById("unley_parkside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(unley_parkside_livepop, 500);
}
