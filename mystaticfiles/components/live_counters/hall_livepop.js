function hall_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 276;
var increase = Math.round(passed*-1.20966595167143e-12*population);
document.getElementById("hall_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hall_livepop, 500);
}
