function new_town_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6036;
var increase = Math.round(passed*7.07897749815422e-14*population);
document.getElementById("new_town_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(new_town_livepop, 500);
}
