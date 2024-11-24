function bundall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4522;
var increase = Math.round(passed*4.85111186522579e-13*population);
document.getElementById("bundall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundall_livepop, 500);
}
