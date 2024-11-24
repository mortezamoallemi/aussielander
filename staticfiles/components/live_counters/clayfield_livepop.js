function clayfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10473;
var increase = Math.round(passed*2.89926108290917e-13*population);
document.getElementById("clayfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clayfield_livepop, 500);
}
