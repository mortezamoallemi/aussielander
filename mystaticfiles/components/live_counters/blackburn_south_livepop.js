function blackburn_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10793;
var increase = Math.round(passed*1.2221551548685e-13*population);
document.getElementById("blackburn_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blackburn_south_livepop, 500);
}
