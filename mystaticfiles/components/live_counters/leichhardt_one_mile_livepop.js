function leichhardt_one_mile_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7659;
var increase = Math.round(passed*8.36095141874949e-13*population);
document.getElementById("leichhardt_one_mile_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(leichhardt_one_mile_livepop, 500);
}
