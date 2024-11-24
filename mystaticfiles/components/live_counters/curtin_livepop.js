function curtin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5234;
var increase = Math.round(passed*7.18953891205051e-14*population);
document.getElementById("curtin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(curtin_livepop, 500);
}
