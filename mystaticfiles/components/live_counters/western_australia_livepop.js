function western_australia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2474414;
var increase = Math.round(passed*6.33548276437729e-13*population);
document.getElementById("western_australia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(western_australia_livepop, 500);
}
