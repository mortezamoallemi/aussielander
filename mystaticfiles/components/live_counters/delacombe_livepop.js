function delacombe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7082;
var increase = Math.round(passed*1.32138824759293e-12*population);
document.getElementById("delacombe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(delacombe_livepop, 500);
}
