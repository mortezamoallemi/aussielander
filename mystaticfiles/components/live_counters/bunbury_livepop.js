function bunbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 72396;
var increase = Math.round(passed*6.24387427146847e-13*population);
document.getElementById("bunbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bunbury_livepop, 500);
}
