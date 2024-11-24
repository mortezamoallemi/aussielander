function bribie_island_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18145;
var increase = Math.round(passed*3.95870151548996e-13*population);
document.getElementById("bribie_island_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bribie_island_livepop, 500);
}
