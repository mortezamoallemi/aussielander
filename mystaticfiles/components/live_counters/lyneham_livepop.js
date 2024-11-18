function lyneham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5114;
var increase = Math.round(passed*8.30926184493775e-13*population);
document.getElementById("lyneham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lyneham_livepop, 500);
}
