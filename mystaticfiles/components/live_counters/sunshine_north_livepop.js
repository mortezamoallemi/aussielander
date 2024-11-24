function sunshine_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11699;
var increase = Math.round(passed*6.04127947010978e-13*population);
document.getElementById("sunshine_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunshine_north_livepop, 500);
}
