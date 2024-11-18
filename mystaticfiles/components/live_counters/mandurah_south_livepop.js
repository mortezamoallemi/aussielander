function mandurah_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10165;
var increase = Math.round(passed*5.81099940301948e-13*population);
document.getElementById("mandurah_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mandurah_south_livepop, 500);
}
