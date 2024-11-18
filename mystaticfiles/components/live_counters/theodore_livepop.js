function theodore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3799;
var increase = Math.round(passed*-3.5702207801608e-13*population);
document.getElementById("theodore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(theodore_livepop, 500);
}
