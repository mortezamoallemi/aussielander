function canning_vale_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23065;
var increase = Math.round(passed*7.44569665940478e-13*population);
document.getElementById("canning_vale_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canning_vale_east_livepop, 500);
}
