function benowa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8739;
var increase = Math.round(passed*5.78598209769247e-13*population);
document.getElementById("benowa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(benowa_livepop, 500);
}
