function frankston_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18204;
var increase = Math.round(passed*2.09310530214593e-13*population);
document.getElementById("frankston_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(frankston_south_livepop, 500);
}
