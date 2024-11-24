function normanhurst_thornleigh_westleigh_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18531;
var increase = Math.round(passed*1.75227329069341e-13*population);
document.getElementById("normanhurst_thornleigh_westleigh_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(normanhurst_thornleigh_westleigh_livepop, 500);
}
