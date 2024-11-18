function gladesville_huntleys_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14409;
var increase = Math.round(passed*4.49066854553187e-13*population);
document.getElementById("gladesville_huntleys_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gladesville_huntleys_point_livepop, 500);
}
