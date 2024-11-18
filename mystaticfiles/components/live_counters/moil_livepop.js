function moil_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2000;
var increase = Math.round(passed*-8.50436764961801e-14*population);
document.getElementById("moil_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moil_livepop, 500);
}
