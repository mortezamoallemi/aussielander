function brisbane_city_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10189;
var increase = Math.round(passed*9.97566361377743e-13*population);
document.getElementById("brisbane_city_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brisbane_city_livepop, 500);
}
