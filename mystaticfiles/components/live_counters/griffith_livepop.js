function griffith_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19143;
var increase = Math.round(passed*4.25421970739884e-13*population);
document.getElementById("griffith_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(griffith_livepop, 500);
}
