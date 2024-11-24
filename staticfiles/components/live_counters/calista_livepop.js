function calista_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7670;
var increase = Math.round(passed*2.53037222082189e-13*population);
document.getElementById("calista_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(calista_livepop, 500);
}
