function ballina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24850;
var increase = Math.round(passed*3.51276990130647e-13*population);
document.getElementById("ballina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballina_livepop, 500);
}
