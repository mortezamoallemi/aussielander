function palmerston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5529;
var increase = Math.round(passed*-1.71995853749327e-13*population);
document.getElementById("palmerston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(palmerston_livepop, 500);
}
