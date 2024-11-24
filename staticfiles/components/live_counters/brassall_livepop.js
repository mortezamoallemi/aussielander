function brassall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10902;
var increase = Math.round(passed*1.04555678464612e-12*population);
document.getElementById("brassall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brassall_livepop, 500);
}
