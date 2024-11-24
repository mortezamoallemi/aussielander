function flinders_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5371;
var increase = Math.round(passed*4.62183447923647e-14*population);
document.getElementById("flinders_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flinders_livepop, 500);
}
