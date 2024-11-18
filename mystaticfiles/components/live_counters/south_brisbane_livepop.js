function south_brisbane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7229;
var increase = Math.round(passed*1.83002636569253e-12*population);
document.getElementById("south_brisbane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_brisbane_livepop, 500);
}
