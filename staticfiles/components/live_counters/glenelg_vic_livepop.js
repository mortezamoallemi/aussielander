function glenelg_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8720;
var increase = Math.round(passed*-8.0937668783937e-14*population);
document.getElementById("glenelg_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glenelg_vic_livepop, 500);
}
