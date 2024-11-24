function frankston_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19291;
var increase = Math.round(passed*7.60673716312558e-14*population);
document.getElementById("frankston_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(frankston_north_livepop, 500);
}
