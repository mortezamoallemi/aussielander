function seabrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5122;
var increase = Math.round(passed*1.91052433211543e-13*population);
document.getElementById("seabrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seabrook_livepop, 500);
}
