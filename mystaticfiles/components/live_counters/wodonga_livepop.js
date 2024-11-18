function wodonga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24397;
var increase = Math.round(passed*9.69347571729027e-13*population);
document.getElementById("wodonga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wodonga_livepop, 500);
}
