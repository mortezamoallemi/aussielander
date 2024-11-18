function enoggera_reservoir_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26;
var increase = Math.round(passed*7.77538826054872e-13*population);
document.getElementById("enoggera_reservoir_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(enoggera_reservoir_livepop, 500);
}
