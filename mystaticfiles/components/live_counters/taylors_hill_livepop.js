function taylors_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19223;
var increase = Math.round(passed*1.37996408463149e-12*population);
document.getElementById("taylors_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taylors_hill_livepop, 500);
}
