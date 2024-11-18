function albion_park_rail_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6918;
var increase = Math.round(passed*-7.65418063007162e-14*population);
document.getElementById("albion_park_rail_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albion_park_rail_livepop, 500);
}
