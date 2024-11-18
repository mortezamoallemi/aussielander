function victor_harbor_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14374;
var increase = Math.round(passed*4.38842168482354e-13*population);
document.getElementById("victor_harbor_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(victor_harbor_livepop, 500);
}
