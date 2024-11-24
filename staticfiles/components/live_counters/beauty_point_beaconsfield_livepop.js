function beauty_point_beaconsfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3760;
var increase = Math.round(passed*5.59064999028521e-14*population);
document.getElementById("beauty_point_beaconsfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beauty_point_beaconsfield_livepop, 500);
}
