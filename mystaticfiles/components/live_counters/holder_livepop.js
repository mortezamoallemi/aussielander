function holder_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2604;
var increase = Math.round(passed*-2.53043572712372e-13*population);
document.getElementById("holder_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(holder_livepop, 500);
}
