function strathmore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9430;
var increase = Math.round(passed*2.67864803661092e-13*population);
document.getElementById("strathmore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(strathmore_livepop, 500);
}
