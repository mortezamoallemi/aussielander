function mountain_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11255;
var increase = Math.round(passed*2.9973314262355e-12*population);
document.getElementById("mountain_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mountain_creek_livepop, 500);
}
