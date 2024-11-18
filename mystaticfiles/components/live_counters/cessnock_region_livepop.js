function cessnock_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7926;
var increase = Math.round(passed*7.57185189728898e-13*population);
document.getElementById("cessnock_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cessnock_region_livepop, 500);
}
