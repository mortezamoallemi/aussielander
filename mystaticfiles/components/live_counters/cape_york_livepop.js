function cape_york_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7516;
var increase = Math.round(passed*3.99632480546206e-13*population);
document.getElementById("cape_york_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cape_york_livepop, 500);
}
