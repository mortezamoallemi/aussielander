function cairns_city_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11435;
var increase = Math.round(passed*9.45623126593115e-13*population);
document.getElementById("cairns_city_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cairns_city_livepop, 500);
}
