function tullamarine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6462;
var increase = Math.round(passed*1.95336598632082e-13*population);
document.getElementById("tullamarine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tullamarine_livepop, 500);
}
