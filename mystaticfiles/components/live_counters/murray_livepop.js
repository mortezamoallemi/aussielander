function murray_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2575;
var increase = Math.round(passed*-8.10418369369819e-13*population);
document.getElementById("murray_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murray_livepop, 500);
}
