function belmore_belfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19033;
var increase = Math.round(passed*1.39470763519354e-13*population);
document.getElementById("belmore_belfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmore_belfield_livepop, 500);
}
