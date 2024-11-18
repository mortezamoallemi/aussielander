function kingsgrove_south_bardwell_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12615;
var increase = Math.round(passed*3.12215965337866e-13*population);
document.getElementById("kingsgrove_south_bardwell_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingsgrove_south_bardwell_park_livepop, 500);
}
