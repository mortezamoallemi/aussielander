function shailer_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11645;
var increase = Math.round(passed*2.03650748897474e-13*population);
document.getElementById("shailer_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shailer_park_livepop, 500);
}