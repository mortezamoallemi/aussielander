function casino_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12231;
var increase = Math.round(passed*2.09265399865067e-13*population);
document.getElementById("casino_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(casino_livepop, 500);
}
