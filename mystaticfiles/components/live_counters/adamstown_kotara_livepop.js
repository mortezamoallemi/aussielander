function adamstown_kotara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15600;
var increase = Math.round(passed*2.30581859080445e-13*population);
document.getElementById("adamstown_kotara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(adamstown_kotara_livepop, 500);
}
