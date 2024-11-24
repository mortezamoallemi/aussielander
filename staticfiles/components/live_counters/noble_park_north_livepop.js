function noble_park_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7488;
var increase = Math.round(passed*8.26908636005905e-14*population);
document.getElementById("noble_park_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(noble_park_north_livepop, 500);
}
