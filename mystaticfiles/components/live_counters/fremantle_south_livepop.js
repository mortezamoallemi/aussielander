function fremantle_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14370;
var increase = Math.round(passed*4.21021481793511e-13*population);
document.getElementById("fremantle_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fremantle_south_livepop, 500);
}
