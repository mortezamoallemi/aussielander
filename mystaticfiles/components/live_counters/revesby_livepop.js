function revesby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16223;
var increase = Math.round(passed*5.52284550711556e-13*population);
document.getElementById("revesby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(revesby_livepop, 500);
}
