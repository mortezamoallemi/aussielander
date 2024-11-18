function blackburn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21383;
var increase = Math.round(passed*4.80744430637882e-13*population);
document.getElementById("blackburn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blackburn_livepop, 500);
}
