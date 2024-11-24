function canley_vale_canley_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20819;
var increase = Math.round(passed*3.85564143757873e-13*population);
document.getElementById("canley_vale_canley_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canley_vale_canley_heights_livepop, 500);
}
