function kadina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5267;
var increase = Math.round(passed*2.39254968076659e-13*population);
document.getElementById("kadina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kadina_livepop, 500);
}
