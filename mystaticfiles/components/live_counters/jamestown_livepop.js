function jamestown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4566;
var increase = Math.round(passed*9.73012985983852e-15*population);
document.getElementById("jamestown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jamestown_livepop, 500);
}
