function cambridge_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15644;
var increase = Math.round(passed*2.09357208166827e-13*population);
document.getElementById("cambridge_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cambridge_park_livepop, 500);
}
