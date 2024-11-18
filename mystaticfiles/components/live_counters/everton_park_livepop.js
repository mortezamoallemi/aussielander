function everton_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8795;
var increase = Math.round(passed*3.48302526147983e-13*population);
document.getElementById("everton_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(everton_park_livepop, 500);
}
