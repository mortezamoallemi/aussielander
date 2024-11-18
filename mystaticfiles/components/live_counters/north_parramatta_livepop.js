function north_parramatta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22232;
var increase = Math.round(passed*5.84686805428683e-13*population);
document.getElementById("north_parramatta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_parramatta_livepop, 500);
}
