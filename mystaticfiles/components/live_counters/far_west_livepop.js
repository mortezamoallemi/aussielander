function far_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2507;
var increase = Math.round(passed*-4.37381271720506e-13*population);
document.getElementById("far_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(far_west_livepop, 500);
}
