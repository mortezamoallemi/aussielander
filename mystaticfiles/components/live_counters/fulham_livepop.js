function fulham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2702;
var increase = Math.round(passed*2.6848277414105e-13*population);
document.getElementById("fulham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fulham_livepop, 500);
}
