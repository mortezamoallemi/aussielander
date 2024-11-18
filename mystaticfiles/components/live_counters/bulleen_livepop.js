function bulleen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11044;
var increase = Math.round(passed*1.00714059708206e-13*population);
document.getElementById("bulleen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bulleen_livepop, 500);
}
