function collie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8798;
var increase = Math.round(passed*-2.32135081041875e-13*population);
document.getElementById("collie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(collie_livepop, 500);
}
