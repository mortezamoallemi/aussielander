function south_west_rocks_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5133;
var increase = Math.round(passed*2.26387810578802e-13*population);
document.getElementById("south_west_rocks_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_west_rocks_livepop, 500);
}
