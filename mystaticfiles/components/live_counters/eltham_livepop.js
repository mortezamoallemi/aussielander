function eltham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22901;
var increase = Math.round(passed*2.66410931340449e-14*population);
document.getElementById("eltham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eltham_livepop, 500);
}
