function leongatha_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11081;
var increase = Math.round(passed*3.27077414866452e-13*population);
document.getElementById("leongatha_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leongatha_livepop, 500);
}
