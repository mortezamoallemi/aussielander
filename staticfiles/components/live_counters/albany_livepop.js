function albany_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 33144;
var increase = Math.round(passed*4.95297724495084e-13*population);
document.getElementById("albany_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albany_livepop, 500);
}
