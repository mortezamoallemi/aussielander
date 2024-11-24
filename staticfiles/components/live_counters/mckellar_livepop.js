function mckellar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2749;
var increase = Math.round(passed*-1.12047609463348e-13*population);
document.getElementById("mckellar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mckellar_livepop, 500);
}
