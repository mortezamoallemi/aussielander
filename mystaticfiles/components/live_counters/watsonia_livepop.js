function watsonia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9113;
var increase = Math.round(passed*8.90040262938968e-14*population);
document.getElementById("watsonia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(watsonia_livepop, 500);
}
