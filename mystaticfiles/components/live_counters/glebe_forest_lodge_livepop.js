function glebe_forest_lodge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19614;
var increase = Math.round(passed*1.06803903185742e-12*population);
document.getElementById("glebe_forest_lodge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glebe_forest_lodge_livepop, 500);
}
