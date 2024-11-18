function florey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4769;
var increase = Math.round(passed*-3.50516506641235e-13*population);
document.getElementById("florey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(florey_livepop, 500);
}
