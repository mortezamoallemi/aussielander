function nyngan_warren_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4971;
var increase = Math.round(passed*-2.95375937301704e-13*population);
document.getElementById("nyngan_warren_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nyngan_warren_livepop, 500);
}
