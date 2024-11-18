function east_fremantle_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7375;
var increase = Math.round(passed*3.92868660404135e-13*population);
document.getElementById("east_fremantle_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_fremantle_livepop, 500);
}
