function haberfield_summer_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13474;
var increase = Math.round(passed*1.13502453446242e-13*population);
document.getElementById("haberfield_summer_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(haberfield_summer_hill_livepop, 500);
}
