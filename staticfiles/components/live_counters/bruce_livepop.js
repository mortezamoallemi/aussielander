function bruce_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6996;
var increase = Math.round(passed*5.74608629927145e-13*population);
document.getElementById("bruce_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bruce_livepop, 500);
}
