function heidelberg_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14151;
var increase = Math.round(passed*3.2456876743662e-13*population);
document.getElementById("heidelberg_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heidelberg_west_livepop, 500);
}
