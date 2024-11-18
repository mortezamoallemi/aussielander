function lara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18088;
var increase = Math.round(passed*9.69849948829036e-13*population);
document.getElementById("lara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lara_livepop, 500);
}
