function altona_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12685;
var increase = Math.round(passed*4.70489653277944e-13*population);
document.getElementById("altona_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(altona_livepop, 500);
}
