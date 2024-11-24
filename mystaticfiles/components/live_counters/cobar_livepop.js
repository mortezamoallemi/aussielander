function cobar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4657;
var increase = Math.round(passed*-8.11868360089067e-14*population);
document.getElementById("cobar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cobar_livepop, 500);
}
