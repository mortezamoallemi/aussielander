function point_vernon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5693;
var increase = Math.round(passed*2.22837612860191e-15*population);
document.getElementById("point_vernon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(point_vernon_livepop, 500);
}
