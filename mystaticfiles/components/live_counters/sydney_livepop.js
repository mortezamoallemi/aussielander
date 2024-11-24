function sydney_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4446805;
var increase = Math.round(passed*6.26493891305862e-13*population);
document.getElementById("sydney_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sydney_livepop, 500);
}
