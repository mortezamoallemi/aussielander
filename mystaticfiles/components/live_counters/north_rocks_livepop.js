function north_rocks_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7878;
var increase = Math.round(passed*2.07012570111865e-13*population);
document.getElementById("north_rocks_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_rocks_livepop, 500);
}
