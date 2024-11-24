function galston_laughtondale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5210;
var increase = Math.round(passed*1.41553710620164e-13*population);
document.getElementById("galston_laughtondale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(galston_laughtondale_livepop, 500);
}
