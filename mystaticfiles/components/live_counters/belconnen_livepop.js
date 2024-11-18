function belconnen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6651;
var increase = Math.round(passed*2.56858288821768e-12*population);
document.getElementById("belconnen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belconnen_livepop, 500);
}
