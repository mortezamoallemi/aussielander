function box_hill_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17549;
var increase = Math.round(passed*4.19403367031134e-13*population);
document.getElementById("box_hill_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(box_hill_north_livepop, 500);
}
