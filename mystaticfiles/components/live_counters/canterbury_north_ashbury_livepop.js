function canterbury_north_ashbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10449;
var increase = Math.round(passed*6.85817855051872e-13*population);
document.getElementById("canterbury_north_ashbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canterbury_north_ashbury_livepop, 500);
}
