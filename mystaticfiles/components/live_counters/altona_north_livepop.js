function altona_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14004;
var increase = Math.round(passed*4.65949990368558e-13*population);
document.getElementById("altona_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(altona_north_livepop, 500);
}
