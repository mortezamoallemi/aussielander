function kuranda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4495;
var increase = Math.round(passed*2.24009139442986e-13*population);
document.getElementById("kuranda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kuranda_livepop, 500);
}
