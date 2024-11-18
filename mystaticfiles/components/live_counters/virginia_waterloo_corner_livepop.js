function virginia_waterloo_corner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4219;
var increase = Math.round(passed*7.76166496764046e-13*population);
document.getElementById("virginia_waterloo_corner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(virginia_waterloo_corner_livepop, 500);
}
