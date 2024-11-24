function crace_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4456;
var increase = Math.round(passed*1.31310561371983e-11*population);
document.getElementById("crace_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(crace_livepop, 500);
}
