function kilcoy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5383;
var increase = Math.round(passed*6.76968717598838e-13*population);
document.getElementById("kilcoy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kilcoy_livepop, 500);
}
