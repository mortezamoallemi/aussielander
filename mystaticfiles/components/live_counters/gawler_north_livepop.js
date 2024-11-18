function gawler_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9200;
var increase = Math.round(passed*3.00676568435898e-13*population);
document.getElementById("gawler_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gawler_north_livepop, 500);
}
