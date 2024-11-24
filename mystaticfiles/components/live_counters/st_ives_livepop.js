function st_ives_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20456;
var increase = Math.round(passed*5.88228434033429e-13*population);
document.getElementById("st_ives_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_ives_livepop, 500);
}
