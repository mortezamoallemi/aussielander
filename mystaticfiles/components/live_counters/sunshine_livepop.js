function sunshine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9772;
var increase = Math.round(passed*6.37116607603664e-13*population);
document.getElementById("sunshine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunshine_livepop, 500);
}
