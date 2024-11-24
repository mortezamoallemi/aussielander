function west_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4965;
var increase = Math.round(passed*6.51891495879263e-13*population);
document.getElementById("west_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_beach_livepop, 500);
}
