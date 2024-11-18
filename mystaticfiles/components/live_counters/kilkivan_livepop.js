function kilkivan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3687;
var increase = Math.round(passed*1.9741059433518e-13*population);
document.getElementById("kilkivan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kilkivan_livepop, 500);
}
