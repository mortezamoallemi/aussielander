function terrey_hills_duffys_forest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3648;
var increase = Math.round(passed*1.99554622422304e-13*population);
document.getElementById("terrey_hills_duffys_forest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(terrey_hills_duffys_forest_livepop, 500);
}
