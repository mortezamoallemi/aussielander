function maiden_gully_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5087;
var increase = Math.round(passed*9.17232894066197e-13*population);
document.getElementById("maiden_gully_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maiden_gully_livepop, 500);
}
