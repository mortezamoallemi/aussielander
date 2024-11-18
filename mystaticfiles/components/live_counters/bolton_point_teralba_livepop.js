function bolton_point_teralba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8523;
var increase = Math.round(passed*-1.29627631819147e-13*population);
document.getElementById("bolton_point_teralba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bolton_point_teralba_livepop, 500);
}
