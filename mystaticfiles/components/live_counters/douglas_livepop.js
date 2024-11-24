function douglas_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7741;
var increase = Math.round(passed*4.68288346585624e-13*population);
document.getElementById("douglas_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(douglas_livepop, 500);
}
