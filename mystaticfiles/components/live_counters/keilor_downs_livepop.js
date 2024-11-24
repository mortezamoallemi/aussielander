function keilor_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13185;
var increase = Math.round(passed*-1.35153023918238e-13*population);
document.getElementById("keilor_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(keilor_downs_livepop, 500);
}
