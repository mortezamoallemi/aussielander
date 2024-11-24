function freshwater_brookvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20978;
var increase = Math.round(passed*5.50118806032178e-13*population);
document.getElementById("freshwater_brookvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(freshwater_brookvale_livepop, 500);
}
