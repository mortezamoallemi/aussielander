function sheidow_park_trott_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10115;
var increase = Math.round(passed*3.56561139115913e-13*population);
document.getElementById("sheidow_park_trott_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sheidow_park_trott_park_livepop, 500);
}
