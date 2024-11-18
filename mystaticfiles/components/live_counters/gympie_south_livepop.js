function gympie_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6748;
var increase = Math.round(passed*4.37684183186764e-13*population);
document.getElementById("gympie_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gympie_south_livepop, 500);
}
