function beaufort_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4393;
var increase = Math.round(passed*8.66473267916213e-13*population);
document.getElementById("beaufort_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beaufort_livepop, 500);
}
