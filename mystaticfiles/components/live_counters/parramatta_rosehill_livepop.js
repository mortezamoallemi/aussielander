function parramatta_rosehill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 29243;
var increase = Math.round(passed*1.60542335395967e-12*population);
document.getElementById("parramatta_rosehill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parramatta_rosehill_livepop, 500);
}
