function south_australia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1676653;
var increase = Math.round(passed*3.10391885688524e-13*population);
document.getElementById("south_australia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_australia_livepop, 500);
}
