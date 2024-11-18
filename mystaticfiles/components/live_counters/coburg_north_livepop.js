function coburg_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7681;
var increase = Math.round(passed*9.85052570158968e-13*population);
document.getElementById("coburg_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coburg_north_livepop, 500);
}
