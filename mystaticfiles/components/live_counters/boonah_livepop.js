function boonah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11884;
var increase = Math.round(passed*5.26645238757436e-13*population);
document.getElementById("boonah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(boonah_livepop, 500);
}
