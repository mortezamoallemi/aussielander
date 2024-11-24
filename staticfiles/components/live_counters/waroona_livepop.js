function waroona_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4150;
var increase = Math.round(passed*9.33454024632717e-13*population);
document.getElementById("waroona_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waroona_livepop, 500);
}
