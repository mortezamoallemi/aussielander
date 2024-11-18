function far_south_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2803;
var increase = Math.round(passed*-9.24711790604577e-13*population);
document.getElementById("far_south_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(far_south_west_livepop, 500);
}
