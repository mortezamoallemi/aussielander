function deer_park_derrimut_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26252;
var increase = Math.round(passed*1.0649428877036e-12*population);
document.getElementById("deer_park_derrimut_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deer_park_derrimut_livepop, 500);
}
