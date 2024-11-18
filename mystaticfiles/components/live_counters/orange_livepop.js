function orange_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 38737;
var increase = Math.round(passed*3.82974845226193e-13*population);
document.getElementById("orange_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(orange_livepop, 500);
}
