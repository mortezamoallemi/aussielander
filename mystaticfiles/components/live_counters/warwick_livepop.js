function warwick_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15133;
var increase = Math.round(passed*2.23490693521766e-13*population);
document.getElementById("warwick_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warwick_livepop, 500);
}
