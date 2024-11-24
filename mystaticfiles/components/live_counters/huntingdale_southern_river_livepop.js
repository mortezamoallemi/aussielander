function huntingdale_southern_river_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19041;
var increase = Math.round(passed*1.71560582910645e-12*population);
document.getElementById("huntingdale_southern_river_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(huntingdale_southern_river_livepop, 500);
}
