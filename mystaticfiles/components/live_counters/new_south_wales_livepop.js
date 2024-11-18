function new_south_wales_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7480230;
var increase = Math.round(passed*4.9585588693731e-13*population);
document.getElementById("new_south_wales_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(new_south_wales_livepop, 500);
}
