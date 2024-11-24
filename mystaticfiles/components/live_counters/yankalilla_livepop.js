function yankalilla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5730;
var increase = Math.round(passed*8.73151948301471e-13*population);
document.getElementById("yankalilla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yankalilla_livepop, 500);
}
