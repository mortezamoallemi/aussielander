function palmerston_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4230;
var increase = Math.round(passed*1.48658306702147e-13*population);
document.getElementById("palmerston_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(palmerston_north_livepop, 500);
}
