function hill_top_colo_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6026;
var increase = Math.round(passed*3.82834616715369e-13*population);
document.getElementById("hill_top_colo_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hill_top_colo_vale_livepop, 500);
}
