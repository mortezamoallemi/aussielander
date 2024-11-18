function the_parks_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18442;
var increase = Math.round(passed*4.21187302457558e-13*population);
document.getElementById("the_parks_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_parks_livepop, 500);
}
