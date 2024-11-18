function coromandel_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4313;
var increase = Math.round(passed*4.87107310502327e-14*population);
document.getElementById("coromandel_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coromandel_valley_livepop, 500);
}
