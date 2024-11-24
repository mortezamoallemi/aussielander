function gannawarra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6653;
var increase = Math.round(passed*1.5340694494607e-13*population);
document.getElementById("gannawarra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gannawarra_livepop, 500);
}
