function mawson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3254;
var increase = Math.round(passed*6.89015201197796e-13*population);
document.getElementById("mawson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mawson_livepop, 500);
}
