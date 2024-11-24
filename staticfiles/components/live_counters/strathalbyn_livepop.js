function strathalbyn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7097;
var increase = Math.round(passed*6.03291606983404e-13*population);
document.getElementById("strathalbyn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(strathalbyn_livepop, 500);
}
