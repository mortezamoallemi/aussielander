function franklin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6420;
var increase = Math.round(passed*3.31749192280708e-12*population);
document.getElementById("franklin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(franklin_livepop, 500);
}
