function belmont_south_blacksmiths_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5604;
var increase = Math.round(passed*-1.58238217103717e-14*population);
document.getElementById("belmont_south_blacksmiths_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmont_south_blacksmiths_livepop, 500);
}
