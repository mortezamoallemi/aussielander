function greenway_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1892;
var increase = Math.round(passed*1.67866916683842e-12*population);
document.getElementById("greenway_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenway_livepop, 500);
}
