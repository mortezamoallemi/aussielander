function homebush_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16211;
var increase = Math.round(passed*1.64004505208999e-12*population);
document.getElementById("homebush_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(homebush_livepop, 500);
}
